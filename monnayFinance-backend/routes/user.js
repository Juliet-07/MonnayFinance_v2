const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");
const hashTagExtractor = require("../helpers/hashTagExtractor");
const fs = require("fs");
const path=require("path");
const multer = require("multer");

var profileUpload = multer({ storage: multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
}) });

const {
  pool,
  TBL_USERS,
  TBL_WITHDRAWALS
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
  id: Joi.number().integer(),
});

const profileSchema = Joi.object({
  id: Joi.number().integer(),
  fullname: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  btc:Joi.string().min(3).max(200).required(),
  eth:Joi.string().min(3).max(200).required(),
  doge:Joi.string().min(3).max(200).required(),
  usdt:Joi.string().min(3).max(200).required(),
  security_question:Joi.string().min(3).max(200).required(),
  answer:Joi.string().required(),
});

const passwordSchema = Joi.object({
  old_password:Joi.string().min(3).max(200).required(),
  new_password:Joi.string().min(3).max(200).required()
});


router.get("/profile/:id?", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  let { id } = req.params;
  
  const { error, value } = idSchema.validate({ id });
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let user = await pool.query(`SELECT UId as userId,UUserName as username,UFullName as fullName,UEmail as email,UPhone as phone,UPrivilege as privilege,USecQ as securityQuestion,USecA as securityAnswer,UStatus as status,UIsVerified as verificationStatus,UBTCA as bitcoinAddress,UETHA as ethereumAddress,UDODGEA as dogeAddress,UUSDTA as usdtAddress,ROUND(UBalance,2) as walletBalance,UPhoto as photo,ULastLogin as lastLogin,CONCAT('https://monnayfinance.com/ref/',UUserName) as referralLink FROM  ${TBL_USERS} WHERE UId =?`, [id]);
  if (user.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }


  let totalWithdrawal = await pool.query(`SELECT SUM(WAmount) as total FROM ${TBL_WITHDRAWALS} WHERE WUId =? AND WStatus=?`, [id,"approved"]);
  user[0].totalWithdrawal=totalWithdrawal[0].total==null ? 0 : parseFloat(totalWithdrawal[0].total.toFixed(2) );

  let pendingWithdrawal = await pool.query(`SELECT SUM(WAmount) as total FROM ${TBL_WITHDRAWALS} WHERE WUId =? AND WStatus=?`, [id,"pending"]);
  user[0].pendingWithdrawal=pendingWithdrawal[0].total==null ? 0 : parseFloat(pendingWithdrawal[0].total.toFixed(2) );

  user[0].activeInvestment=0;
  user[0].totalEarning=0;


  output.flag = true;
  output.message = "Profile Successfully fetched";
  output.data = user[0];
  res.status(200).json(output);
});

router.put("/profile", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };

  var { error, value } = profileSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let {id,fullname,email,btc,eth,doge,usdt,security_question,answer} = req.body;

  let result = await pool.query(
    `SELECT * FROM ${TBL_USERS} WHERE UId=?`,
    [id]
  );
  if (result.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }

  try {
    await pool.query(
      `UPDATE ${TBL_USERS} SET UFullName=?,UEmail=?,UBTCA=?,UETHA=?,UDODGEA=?,UUSDTA=?,USecQ=?,USecA=? WHERE UId=?`,
      [fullname,email,btc,eth,doge,usdt,security_question,answer,id]
    );
    output.flag = true;
    output.message = "Profile update was successful";
    output.data = {
      id,fullname,email,btc,eth,doge,usdt,security_question,answer
    };
    return res.status(200).json(output);
  } catch (e) {
    output.message = "Profile update failed";
    return res.status(400).json(output);
  }
});


router.put("/password", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };

  let { id } = req.user;
  var { error, value } = idSchema.validate({ id });
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  var { error, value } = passwordSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let {old_password,new_password} = req.body;


  let result = await pool.query(
    `SELECT * FROM ${TBL_USERS} WHERE UId=?`,
    [id]
  );
  if (result.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }

  let {UPassword}=result[0];

  let pass = await new bcrypt.compare(old_password, UPassword);
  if (!pass) {
    output.message = "Invalid current Password";
    return res.status(400).json(output);
  }

  let newPassword = await bcrypt.hash(new_password, 10);
  let tok=Date.now();

  let tokens = await jwt.sign({ id,privilege:"user", token:tok }, process.env.JWTPRIVATEKEY, {});



  try {
    await pool.query(
      `UPDATE ${TBL_USERS} SET UPassword=?,UToken=? WHERE UId=?`,
      [newPassword,tok,id]
    );
    output.flag = true;
    output.message = "Password update was successful";
    output.data = {
      token:tokens
    };
    return res.status(200).json(output);
  } catch (e) {
    output.message = "Password update failed";
    return res.status(400).json(output);
  }
});

router.put("/photo",[profileUpload.single("media"), authMW],async (req, res) => {
   
  let output = { flag: false, message: "", data: {} };

  let { id } = req.body;

  var { error, value } = idSchema.validate({ id });
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
  if (!req.file) {
    output.message = "Please upload a valid media image";
    return res.status(400).json(output);
  }
  let media = req.file;
  let fullPath=media.path;

  let photo=req.headers.host+"/uploads/profiles/"+fullPath;
  let user=  await pool.query(`SELECT UPhoto FROM  ${TBL_USERS} WHERE UId =?`, [id]);

  if (user.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }
  let oldPhoto=user[0].UPhoto;
    if(oldPhoto) {
      let pt=oldPhoto.match(/.*\/(.*)$/)[1];
      fs.unlink("uploads/profiles/"+pt,function(err){
        if(err){
         output.message="Image upload failed"
         return res.status(400).json(output);
        }
   });
    } 

  await pool.query(`UPDATE ${TBL_USERS} SET UPhoto=? WHERE UId=?`, [
    photo,
    id,
  ]);

  output.flag = true;
  output.message = "Profile photo update was successful";
  output.data = { photo, id };
  return res.status(200).json(output);
}
);

module.exports = router;
