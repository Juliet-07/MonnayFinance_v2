const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool, TBL_USERS,TBL_USERACTIVITYLOG } = require("../db/db");
const log = require("../config/log4js");
const Emailing = require("../helpers/utils/email/index");
const geoip = require('geoip-lite');
const requestIp = require('request-ip');
const generateVerificationCode = require("../helpers/utils/code/generateVerificationCode");

const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(3).max(100).required(),
});

const usernameSchema = Joi.object({
    username: Joi.string().min(3).max(100).required()
  });

const registerSchema = Joi.object({
  fullname:Joi.string().min(3).max(200).required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(50).required(),
});

const verifySchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
});

router.post("/login", async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  req.body.username=  req.body.username.trim();
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
  let { username, password } = req.body;

  let result = await pool.query(
    `SELECT * FROM ${TBL_USERS} WHERE  UEmail=? OR UUserName=?`,
    [username, username]
  );
  if (result.length < 1) {
    output.message = "Invalid Username Supplied";
    return res.status(400).json(output);
  }
  let {
    UId,
    UFullName,
    UUserName,
    UPassword,
    UPrivilege,
    UEmail,
    UStatus,
    UIsVerified,
    UBalance,
    UPhoto,
    ULastLogin,
    UCreatedAt,
    UToken
  } = result[0];

  if (UStatus == "inactive") {
    output.message = "Account appears to be inactive!";
    return res.status(400).json(output);
  }
  if (UStatus == "suspended") {
    output.message = "Account appears to be suspended, Please contact Admin!";
    return res.status(400).json(output);
  }
  let pass = await new bcrypt.compare(password, UPassword);
  if (!pass) {
    output.message = "Invalid Password";
    return res.status(400).json(output);
  }
  await pool.query(
    `UPDATE ${TBL_USERS} SET ULastLogin=current_timestamp() where UEmail=?`,
    [UEmail]
  );
  let tokens = await jwt.sign({ id: UId,privilege:UPrivilege, token:UToken }, process.env.JWTPRIVATEKEY, {});
  output.flag = true;
  output.message = "Login Succesful";
  let browser=req.headers ? req.headers['user-agent']  : "Unknown";
  let ip= requestIp.getClientIp(req);
  let geo = geoip.lookup(ip);
  let location=geo ? geo.timezone : "Unknown";
  await pool.query(
    `INSERT INTO ${TBL_USERACTIVITYLOG} (user_id,browser,ip,location) VALUES ?`,
    [[[UId,browser,ip,location]]]
  );
  output.data = {
    token:tokens,
    id: UId,
    name: UFullName,
    username: UUserName,
    privilege:UPrivilege,
    status: UStatus,
    isVerified:UIsVerified,
    photo: UPhoto,
    balance: UBalance.toFixed(2),
    lastlogin: ULastLogin,
    createdat: UCreatedAt,
    email:UEmail
  };

  res.status(200).header("Authorization", tokens).json(output);
});

router.post("/register", async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
   

  let { username, password, fullname, email } = req.body;

  var result = await pool.query(
    `SELECT * FROM ${TBL_USERS} WHERE UEmail=? OR UUsername=?`,
    [email, username]
  );
  if (result.length >= 1) {
    let { UEmail, UUserName } = result[0];
    if (UEmail == email) {
      output.message = "Email already taken by another user";
    }
    if (UUserName == username) {
      output.message = "Username already taken by another user";
    }
    return res.status(400).json(output);
  }
  let newPassword = await bcrypt.hash(password, 10);
  try {
    let insert = await pool.query(
      `INSERT INTO ${TBL_USERS} (UUserName,UFullName,UPassword,UEmail,UToken) VALUES (?)`,
      [[username, fullname, newPassword, email,"894e3443b63c9293"]]
    );

    // let code = generateVerificationCode();
    // let message="Welcome. Your verification code is below";
    // let verificationLink=req.headers.origin+"/api/auth/verify/"+code;
    // await new Emailing().mailSend({fullName:fullname,message,verificationLink,actionText:code},email,"REGISTRATION",process.env.MAIL_EMAIL);
    // await pool.query(`UPDATE ${TBL_USERS}  SET UVerificationCode=? WHERE UEmail=?`,[code,email]);
    var result = await pool.query(
      `SELECT * FROM ${TBL_USERS} WHERE UEmail=? OR UUsername=?`,
      [username, username]
    );
    if (result.length < 1) {
      output.message = "Invalid Username Supplied";
      return res.status(400).json(output);
    }
    let {
      UId,
      UFullName,
      UUserName,
      UEmail,
      UStatus,
      UIsVerified,
      UBTCA,
      UETHA,
      UDODGEA,
      UUSDTA,
      UBalance,
      UPhoto,
      ULastLogin,
      UCreatedAt,
    } = result[0];
  

    output.flag = true;
    output.message = "Registration was successful";
    output.data = {
      id: UId,
      name: UFullName,
      username: UUserName,
      status: UStatus,
      isVerified:UIsVerified,
      photo: UPhoto,
      btc:UBTCA,
      eth:UETHA,
      doge:UDODGEA,
      usdt:UUSDTA,
      balance: UBalance,
      lastLogin: ULastLogin,
      createdAt: UCreatedAt,
      email:UEmail
    };
    return res.status(200).json(output);
  } catch (err) {
    log.info(`${err.message} Error Registering new user with email ${email}`);
    output.message = `Error Registering new user with email ${email}`;
    return res.status(400).json(output);
  }
});

router.get("/checkusername/:username?", async (req, res) => {
    let output = { flag: false, message: "", data: {} };
    if (!req.params.username){
        output.message="No username was provided";
        return res.status(400).json(output);
    }
  req.params.username=  req.params.username.trim();

    const { error, value } = usernameSchema.validate(req.params);
    if (error) { 
      output.message = error.message;
      return res.status(400).json(output);
    }
    let { username} = req.params;
    let result = await pool.query(
      `SELECT * FROM ${TBL_USERS} WHERE UPrivilege=? AND UUsername=?`,
      ["user",username]
    );
    if (result.length >= 1) {
     output.message = "Username already taken by another user";
     let suggestions=[];
     for(let i=1;i<=3;i++){
         suggestions.push(username+"_"+Math.floor((Math.random() * 100) + 1));
     }
     
     output.data={suggestions};
      return res.status(400).json(output);
    }
    output.flag=true;
    output.message="Username is available";
    return res.status(200).json(output);
  });



router.post("/verify", async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  const { error, value } = verifySchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }
  let { code, email } = req.body;
  let result = await pool.query(`SELECT * FROM ${TBL_USERS} WHERE UPrivilege=? AND UEmail=? `, ["user",
    email
  ]);
  if (result.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }
  let {
    UId,
    UFullName,
    UUsername,
    UEmail,
    UStatus,
    UPhone
  } = result[0];
  if (code !== result[0].UVerificationCode){
    output.message = "Invalid Code";
    return res.status(400).json(output);
  }

  try {
    let update = await pool.query(
      `UPDATE ${TBL_USERS} SET UEmailVerified=?, UVerificationCode=NULL WHERE UEmail=? AND UPrivilege=?`,
      ["1", email,"user"]
    );
    let code = "";
    let message =
      "Your account has been successfully verified You may now login";
    let verificationLink = req.headers.origin + "/api/auth/login/";
    await new Emailing().mailSend(
      {
        fullName: result[0].UFirstName,
        message,
        verificationLink,
        actionText: code,
      },
      email,
      "VERIFICATION",
      process.env.MAIL_EMAIL
    );
    await pool.query(
      `UPDATE ${TBL_USERS}  SET UVerificationCode=? WHERE UEmail=? AND UPrivilege=?`,
      [code, email,"user"]
    );
        output.flag=true;
        output.message="User account has been successfully verified";
        output.data={"id":UId,"name":UFullName,"username":UUsername,"email":UEmail,"status":UStatus,"phone":UPhone}
    return res.status(200).json(output);
  } catch (err) {
    log.info(`${err.message} Error verifying user with email ${email}`);
    output.message=`Error verifying user with email ${email}`;
    return res.status(400).json(output);
  }
});

module.exports = router;
