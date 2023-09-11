const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");
const addDays = require("../helpers/days");

const {
    pool,
    TBL_WITHDRAWALS,
    TBL_USERS,
    TBL_DEPOSITS,
    TBL_INVESTMENTS,
    TBL_SYSINVESTMENTS,
    TBL_MESSAGES
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");
const crypto = require("crypto");
const randomUUID = crypto.randomBytes(8).toString("hex");

const planSchema = Joi.object({
    plan: Joi.string().valid("basic", "standard","platinum","all").required(),
  });

  const investSchema = Joi.object({
    plan: Joi.string().valid("basic", "standard","platinum").required(),
    amount:Joi.number().required()
  });

router.get("/plans/:plan?", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  let { id } = req.user;
   if(!req.params.plan){
    output.message = "You have not selected any plans";
    return res.status(400).json(output);
   }

   let {plan}=req.params;
   const { error, value } = planSchema.validate({plan});
   if (error) {
     output.message = error.message;
     return res.status(400).json(output);
   }
  let condition=plan=="all" ? 'SIId IS NOT NULL' : `SIName='${plan}'`;

  let result=await pool.query( 
    `SELECT SIId as planId,SIName as planName,SICommit as planRoi,SIPW as profitWithdrawal,SICW as capitalWithdrawal,ROUND(SIMin,2) as minimumInvestment,ROUND(SIMax,2) as maximumInvestment,SIDPR as dailyProfitRange,TRIM(CONCAT_WS("% ",SIRFirst,SIRSecond,SIRThird,"")) as referralBonus FROM ${TBL_SYSINVESTMENTS} WHERE ${condition} ORDER BY SIId ASC`,
    []
   );
result=plan=="all" ? result : result[0];
  output.flag = true;
  output.message = "Investment plans successfully fetched";
  output.data = result;
  res.status(200).json(output);
});

router.post("/", [authMW] ,async (req,res)=>{
    let output = { flag: false, message: "", data: {} };

  let { id } = req.user;
  
  const { error, value } = investSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }


  let {amount,plan}=req.body;

  let user = await pool.query(`SELECT * FROM  ${TBL_USERS} WHERE UId =?`, [id]);
  if (user.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }
  let {UBalance}=user[0];
        if(UBalance<amount){
            output.message = "Amount in balance is insufficient";
            return res.status(400).json(output);
        }

        let result=await pool.query( 
            `SELECT SIId as planId,SIName as planName,SICommit as planRoi,REPLACE(SIDuration,' day','') as planDuration,SIIncome as planIncome,SIPW as profitWithdrawal,SICW as capitalWithdrawal,ROUND(SIMin,2) as minimumInvestment,ROUND(SIMax,2) as maximumInvestment,SIDPR as dailyProfitRange,TRIM(CONCAT_WS("% ",SIRFirst,SIRSecond,SIRThird,"")) as referralBonus FROM ${TBL_SYSINVESTMENTS} WHERE SIName=? ORDER BY SIId ASC`,
            [plan]
           );
           let {minimumInvestment,maximumInvestment,planName,planDuration,planIncome}=result[0];
           if(minimumInvestment>amount){
            output.message = `Minimum investment amount for ${plan} is $${minimumInvestment}`;
            return res.status(400).json(output);
             }
            if(maximumInvestment<amount){
                output.message = `Maximum investment amount for ${plan} is $${maximumInvestment}`;
                return res.status(400).json(output);
            }
           let roi= (planIncome/100)*amount;

     
try{
    await pool.query(
        `INSERT INTO ${TBL_INVESTMENTS} (OIReference,OIUId,OIPlan,OIAmount,OIDays,OIRoi,OIRoiGained,OIEndDate) VALUES (?) `,
        [[randomUUID, id,planName,amount,planDuration,roi,0,addDays(new Date(),Number(planDuration))]]
      );

      await pool.query(
        `UPDATE ${TBL_USERS} SET UBalance=UBalance-? WHERE UId=?`,
        [amount, id]
      );

      let title=`Investment Notice`;
      let message=`Congratulations!!!. Your investment plan just commenced.`;
      let message_=`A new investment has been commenced.`;
      let newEntry=[];
         newEntry.push([1,id,title,message],[id,1,title,message_]);
        await pool.query( 
          `INSERT INTO ${TBL_MESSAGES} (OMSender,OMReceiver,OMTitle,OMMessage) VALUES ?`,
          [newEntry]
        );
}catch(e){
    output.message = "Investment failed";
    return res.status(400).json(output);
}

  output.flag = true;
  output.message = "Investment  was successful";
  output.data = {};
  res.status(200).json(output);
});

module.exports = router;
