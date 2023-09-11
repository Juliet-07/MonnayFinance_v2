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
} = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
    id: Joi.number().integer(),
  });



  router.get("/", [authMW], async (req, res) => {
    let output = { flag: false, message: "", data: {} };

    let { id,privilege } = req.user;

    if(req.params.privilege!="admin"){
        output.message = "You are unauthorized to access this route";
        return res.status(400).json(output);
      }

  
    let result = await pool.query(
      `SELECT a.id as id,a.user_id as userId,a.browser as browser,a.ip as ip,a.location as location,a.created_at as createdAt,b.UFullName as fullName,b.UUserName as userName FROM ${TBL_USERACTIVITYLOG} a INNER JOIN ${TBL_USERS} b ON a.user_id=b.UId `,
      []
    );
  
    output.flag = true;
    output.message = "User logs Successfully fetched";
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

  const { error, value } = idSchema.validate({ id:userId });
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let result = await pool.query(
    `SELECT id as id,user_id as userId,browser as browser,ip as ip,location as location,created_at as createdAt FROM ${TBL_USERACTIVITYLOG}  WHERE user_id=? ORDER BY created_at DESC `,
    [userId]
  );

  output.flag = true;
  output.message = "User logs Successfully fetched";
  output.data = result;
  res.status(200).json(output);
});




module.exports = router;
