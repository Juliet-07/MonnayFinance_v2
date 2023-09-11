const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");

const {
    pool,
    TBL_WITHDRAWALS,
    TBL_USERS,
    TBL_DEPOSITS,
    TBL_INVESTMENTS
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
    userId: Joi.number().integer(),
  });

  const statusSchema = Joi.object({
    id: Joi.number().integer().required(),
    status: Joi.string().valid("active", "recent","all").required(),
  });

  router.get("/", [authMW], async (req, res) => {
    let output = { flag: false, message: "", data: {} };

    let { privilege } = req.user;

    if(req.params.privilege!="admin"){
        output.message = "You are unauthorized to access this route";
        return res.status(400).json(output);
      }


      let result=await pool.query( 
        `SELECT OIId as investmentId,OIReference as investmentReference,OIUId as userId,OIPlan as investmentPlan,ROUND(OIAmount,2) as investmentAmount,OIDays as investmentDays,OIRoi as estimatedReturn,OIRoiGained as estimatedReturnGained,OIStartDate as startDate,OIEndDate as endDate FROM ${TBL_INVESTMENTS} INNER JOIN ${TBL_USERS} ON OIUId=UId ORDER BY OIStartDate DESC`,
        []
       );
  
    output.flag = true;
    output.message = "Investments successfully fetched";
    output.data = result;
    res.status(200).json(output);
  });

router.get("/:id?/:status?", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
//   let { id,privilege } = req.user;
  if(!req.params.status){
    output.message = "No Investment status was provided";
    return res.status(400).json(output);
  }
  if(!req.params.id){
    output.message = "No User ID was provided";
    return res.status(400).json(output);
  }
  let {status,id}=req.params;

  const { error, value } = statusSchema.validate( req.params );
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
  var condition=null;
  if(status=="active"){
    condition='OIEndDate > NOW()';
  }else if(status=="recent"){
    condition='OIEndDate < NOW()';
  }else{
      condition='OIEndDate IS NOT NULL'
  }

  let result=await pool.query( 
    `SELECT OIId as investmentId,OIReference as investmentReference,OIUId as userId,OIPlan as investmentPlan,ROUND(OIAmount,2) as investmentAmount,OIDays as investmentDays,OIRoi as estimatedReturn,OIRoiGained as estimatedReturnGained,OIStartDate as startDate,OIEndDate as endDate FROM ${TBL_INVESTMENTS} WHERE OIUId=? AND ${condition} ORDER BY OIStartDate DESC`,
    [id]
   );

  output.flag = true;
  output.message = "User Investments successfully fetched";
  output.data = result;
  res.status(200).json(output);
});

module.exports = router;
