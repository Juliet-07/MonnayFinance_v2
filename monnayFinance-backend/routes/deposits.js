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
    TBL_DEPOSITS,
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
      `SELECT a.DId as depositId,a.DReference as depositReference,a.DUId as userId,ROUND(a.DAmount,2) as depositAmount,a.DWallet as depositWallet,a.DHash as depositHash,a.DStatus as depositStatus,a.DCreatedAt as createdAt,b.UFullName as fullName,b.UUserName as userName FROM ${TBL_DEPOSITS} a INNER JOIN ${TBL_USERS} b ON a.DUId=b.UId `,
      []
    );
  
    output.flag = true;
    output.message = "Deposits successfully fetched";
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
    `SELECT a.DId as depositId,a.DReference as depositReference,a.DUId as userId,ROUND(a.DAmount,2) as depositAmount,a.DWallet as depositWallet,a.DHash as depositHash,a.DStatus as depositStatus,a.DCreatedAt as createdAt FROM ${TBL_DEPOSITS} a  WHERE a.DUId=? ORDER BY DCreatedAt DESC `,
    [userId]
  );

  output.flag = true;
  output.message = "User deposits successfully fetched";
  output.data = result;
  res.status(200).json(output);
});




module.exports = router;
