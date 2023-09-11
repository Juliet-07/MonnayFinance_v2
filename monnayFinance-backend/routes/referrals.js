const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");
const fs = require("fs");
const multer = require("multer");
const postUploads = multer({ dest: "uploads/profiles" });
const {
    pool,
    TBL_USERACTIVITYLOG,
    TBL_USERS,
    TBL_OPSREFERRAL
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

  const userIdSchema = Joi.object({
    userId: Joi.number().integer(),
  });


router.get("/:userId?",  [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
//   let { id,privilege } = req.user;

  const { error, value } = userIdSchema.validate(req.params);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let {userId}=req.params;

let result = await pool.query(
    `SELECT b.UId as userId,b.UUserName as username,b.UFullName as fullname,UEmail as email,ROUND(a.OFRAmount,2) as amount,a.OFRCreatedAt as date FROM ${TBL_OPSREFERRAL} a INNER JOIN ${TBL_USERS} b ON a.OFRUId=b.UId WHERE a.OFRReferrerId=? ORDER BY a.OFRCreatedAt DESC`,
    [userId]
  ); 

  let totalReferralComission=result.map(x=>x.amount).reduce((a,b)=>a+b,0);

  let records={
    totalReferral : result.length,
    totalReferralComission,
    data:result
  };

  output.flag = true;
  output.message = "Referrals Successfully fetched";
  output.data = records;
  res.status(200).json(output);
});




module.exports = router;
