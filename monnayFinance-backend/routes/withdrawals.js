const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");

const {
    pool,
    TBL_WITHDRAWALS,
    TBL_USERS,
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

  
    let result = await pool.query(
      `SELECT a.WId as withdrawalId,a.WReference as withdrawalReference,a.WUId as userId,ROUND(a.WAmount,2) as withdrawalAmount,a.WWallet as withdrawalWallet,a.WWalletA as withdrawalWalletAddress,a.WStatus as withdrawalStatus,a.WCreatedAt as createdAt,a.WComment as withdrawalComment,b.UFullName as fullName,b.UUserName as userName FROM ${TBL_WITHDRAWALS} a INNER JOIN ${TBL_USERS} b ON a.WUId=b.UId `,
      []
    );
  
    output.flag = true;
    output.message = "Withdrawals successfully fetched";
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

  let result = await pool.query(
    `SELECT a.WId as withdrawalId,a.WReference as withdrawalReference,a.WUId as userId,ROUND(a.WAmount,2) as withdrawalAmount,a.WWallet as withdrawalWallet,a.WWalletA as withdrawalWalletAddress,a.WStatus as withdrawalStatus,a.WCreatedAt as createdAt FROM ${TBL_WITHDRAWALS} a WHERE a.WUId=? ORDER BY WCreatedAt DESC `,
    [userId]
  );

  output.flag = true;
  output.message = "User withdrawals successfully fetched";
  output.data = result;
  res.status(200).json(output);
});




module.exports = router;
