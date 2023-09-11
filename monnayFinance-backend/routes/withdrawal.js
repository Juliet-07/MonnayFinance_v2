const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");
const hashTagExtractor = require("../helpers/hashTagExtractor");
const crypto = require("crypto");
const randomUUID= crypto.randomBytes(8).toString("hex");

const {
    pool,
    TBL_DEPOSITS,
    TBL_USERS,
    TBL_MESSAGES,
    TBL_WITHDRAWALS
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
  id: Joi.number().integer(),
});


const withdrawalSchema = Joi.object({
amount: Joi.number().required(),
wallet: Joi.string().valid("btc", "eth", "doge", "usdt").required(),
address:Joi.string().min(3).max(200).required(),
comment:Joi.string().allow('')
  });

  const withdrawalStatusSchema = Joi.object({
    withdrawalReference:Joi.string().min(1).max(50).required(),
    withdrawalStatus:Joi.string().valid('approved', 'declined').required()
      });



router.post("/", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };

  let { id } = req.user;
  
  const { error, value } = withdrawalSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
  var comment=null;
  if (req.body.comment) {
    comment = req.body.comment;
  }

  let {amount,wallet,address}=req.body;

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

try{
    await pool.query(
        `INSERT INTO ${TBL_WITHDRAWALS} (WReference,WUId,WAmount,WWallet,WWalletA,WComment) VALUES (?) `,
        [[randomUUID, id,amount,wallet,address,comment]]
      );
      await pool.query(
        `UPDATE ${TBL_USERS} SET UBalance=UBalance-? WHERE UId=?`,
        [amount, id]
      );

      let title=`Withdrawal Request`;
      let message=`Your withdrawal request is now being processed. Wait a little while.`;
      let message_=`A new withdrawal request has been issued.Please kindly attend to it.`;
      let newEntry=[];
         newEntry.push([1,id,title,message],[id,1,title,message_]);
        await pool.query( 
          `INSERT INTO ${TBL_MESSAGES} (OMSender,OMReceiver,OMTitle,OMMessage) VALUES ?`,
          [newEntry]
        );
}catch(e){
    output.message = "Withdrawal entry failed";
    return res.status(400).json(output);
}

  output.flag = true;
  output.message = "Withdrawal entry was successful";
  output.data = {};
  res.status(200).json(output);
});


router.put("/", [authMW], async (req, res) => {
    let output = { flag: false, message: "", data: {} };
  
    let { id,privilege } = req.user;

    if(req.params.privilege!="admin"){
        output.message = "You are unauthorized to access this route";
        return res.status(400).json(output);
      }
  
    const { error, value } = withdrawalStatusSchema.validate(req.body);
    if (error) {
      output.message = error.message;
      return res.status(400).json(output);
    }
  
    let {withdrawalReference,withdrawalStatus}=req.body;

      let result = await pool.query(
        `SELECT a.WId as withdrawalId,a.WReference as withdrawalReference,a.WUId as userId,ROUND(a.WAmount,2) as withdrawalAmount,a.WWallet as withdrawalWallet,a.WStatus as withdrawalStatus,a.WComment as withdrawalComment,a.WCreatedAt as createdAt FROM ${TBL_WITHDRAWALS} a  WHERE a.WReference=? `,
        [withdrawalReference]
      );

      if(result.length<1){
          output.message = "Withdrawal with provided reference does not exist. ";
          return res.status(400).json(output);
      }
  
  try{
      let x=await pool.query(
          `UPDATE ${TBL_WITHDRAWALS} SET WStatus=? WHERE WReference=?`,
          [withdrawalStatus,withdrawalReference]
        );

        if (x.changedRows === 1) {
            let title=`Withdrawal ${withdrawalStatus}`;
            let message=`Your withdrawal with Reference ID-${result[0].withdrawalReference} has been ${withdrawalStatus}. Thanks for your continuous patronage.`;
              await pool.query( 
                `INSERT INTO ${TBL_MESSAGES} (OMSender,OMReceiver,OMTitle,OMMessage) VALUES (?)`,
                [[id,result[0].userId,title,message]]
              );
            if (withdrawalStatus == "declined") {
              await pool.query(
                `UPDATE ${TBL_USERS} SET UBalance=UBalance+? WHERE UId=?`,
                [result[0].withdrawalAmount, result[0].userId]
              );
            }
          }
  }catch(e){
      output.message = "Withdrawal update failed";
      return res.status(400).json(output);
  }
  
    output.flag = true;
    output.message = "Withdrawal update was successful";
    output.data = {};
    res.status(200).json(output);
  });


router.get("/:withdrawalReference?", [authMW], async (req, res) => {
    let output = { flag: false, message: "", data: {} };
    let { id,privilege } = req.user;
    if(!req.params.withdrawalReference){
      output.message = "No reference was provided";
      return res.status(400).json(output);
    }
    let {withdrawalReference}=req.params;
  
    let result = await pool.query(
      `SELECT a.WId as withdrawalId,a.WReference as withdrawalReference,a.WUId as userId,ROUND(a.WAmount,2) as withdrawalAmount,a.WWallet as withdrawalWallet,a.WWalletA as withdrawalWalletAddress,a.WStatus as withdrawalStatus,a.WComment as withdrawalComment,a.WCreatedAt as createdAt FROM ${TBL_WITHDRAWALS} a  WHERE a.WReference=? `,
      [withdrawalReference]
    );
    if(result.length<1){
        output.message = "Withdrawal with provided reference does not exist.";
        return res.status(400).json(output);
    }
  
    output.flag = true;
    output.message = "Withdrawal details successfully fetched.";
    output.data = result[0];
    res.status(200).json(output);
  });

module.exports = router;
