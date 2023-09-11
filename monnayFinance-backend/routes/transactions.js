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
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
    userId: Joi.number().integer(),
  });

  router.get("/", [authMW], async (req, res) => {
    let output = { flag: false, message: "", data: {} };

    let { id,privilege } = req.user;

    if(req.params.privilege!="admin"){
        output.message = "You are unauthorized to access this route";
        return res.status(400).json(output);
      }


    let result=await pool.query( 
        `SELECT a.DId as transactionId,a.DReference as transactionReference,'deposit' as type,ROUND(a.DAmount,2) as amount,a.DWallet as transactionWallet,a.DStatus as transactionStatus,a.DCreatedAt as date,c.UFullName as fullName,c.UUserName as userName FROM ${TBL_DEPOSITS} a INNER JOIN ${TBL_USERS} c ON a.DUId=c.UId
        UNION ALL 
        SELECT b.WId as transactionId,b.WReference as transactionReference,'withdrawal' as type,ROUND(b.WAmount,2) as amount,b.WWallet as transactionWallet,b.WStatus as transactionStatus,b.WCreatedAt as date,c.UFullName as fullName,c.UUserName as userName FROM ${TBL_WITHDRAWALS} b INNER JOIN ${TBL_USERS} c ON b.WUId=c.UId ORDER BY date DESC`,
        []
    );
  
    output.flag = true;
    output.message = "Transactions successfully fetched";
    output.data = result;
    res.status(200).json(output);
  });

router.get("/:userId?", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  let { id,privilege } = req.user;
  if(!req.params.userId){
    output.message = "No user ID was provided";
    return res.status(400).json(output);
  }
  let {userId}=req.params;

  const { error, value } = idSchema.validate({ userId });
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let result=await pool.query( 
    `SELECT a.DId as transactionId,a.DReference as transactionReference,'deposit' as type,ROUND(a.DAmount,2) as amount,a.DWallet as transactionWallet,a.DStatus as transactionStatus,a.DCreatedAt as date FROM ${TBL_DEPOSITS} a WHERE DUId=?
    UNION ALL 
    SELECT b.WId as transactionId,b.WReference as transactionReference,'withdrawal' as type,ROUND(b.WAmount,2) as amount,b.WWallet as transactionWallet,b.WStatus as transactionStatus,b.WCreatedAt as date FROM ${TBL_WITHDRAWALS} b WHERE WUId=? ORDER BY date DESC`,
    [userId,userId]
   );

  output.flag = true;
  output.message = "User transactions successfully fetched";
  output.data = result;
  res.status(200).json(output);
});

module.exports = router;
