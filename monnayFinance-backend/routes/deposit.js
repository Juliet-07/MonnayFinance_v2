const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");
const hashTagExtractor = require("../helpers/hashTagExtractor");
const crypto = require("crypto");
const randomUUID = crypto.randomBytes(8).toString("hex");

const { pool, TBL_DEPOSITS, TBL_USERS, TBL_MESSAGES } = require("../db/db");
const log = require("../config/log4js");
const generateAlphabeticCode = require("../helpers/utils/code/generateAlphabeticCode");

const idSchema = Joi.object({
  id: Joi.number().integer(),
});

const depositSchema = Joi.object({
  amount: Joi.number().required(),
  wallet: Joi.string().valid("btc", "eth", "doge", "usdt").required(),
  hash: Joi.string().min(5).max(500).required(),
});

const depositStatusSchema = Joi.object({
  depositReference: Joi.string().min(1).max(50).required(),
  depositStatus: Joi.string().valid("approved", "declined").required(),
});

router.post("/", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };

  let { id } = req.user;

  const { error, value } = depositSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let { amount, wallet, hash } = req.body;

  let user = await pool.query(`SELECT * FROM  ${TBL_USERS} WHERE UId =?`, [
    id,
  ]);
  if (user.length < 1) {
    output.message = "User does not exist";
    return res.status(400).json(output);
  }

  try {
    await pool.query(
      `INSERT INTO ${TBL_DEPOSITS} (DReference,DUId,DAmount,DWallet,DHash) VALUES (?) `,
      [[randomUUID, id, amount, wallet, hash]]
    );
  } catch (e) {
    output.message = "Deposit entry failed-possible duplicate hash";
    return res.status(400).json(output);
  }

  output.flag = true;
  output.message = "Deposit entry was successful";
  output.data = {};
  res.status(200).json(output);
});

router.put("/", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };

  let { id, privilege } = req.user;

  if(req.params.privilege!="admin"){
      output.message = "You are unauthorized to access this route";
      return res.status(400).json(output);
    }

  const { error, value } = depositStatusSchema.validate(req.body);
  if (error) {
    output.message = error.message;
    return res.status(400).json(output);
  }

  let { depositReference, depositStatus } = req.body;

  let result = await pool.query(
    `SELECT a.DId as depositId,a.DReference as depositReference,a.DUId as userId,ROUND(a.DAmount,2) as depositAmount,a.DWallet as depositWallet,a.DHash as depositHash,a.DStatus as depositStatus,a.DCreatedAt as createdAt FROM ${TBL_DEPOSITS} a  WHERE a.DReference=? `,
    [depositReference]
  );

  if (result.length < 1) {
    output.message = "Deposit with provided reference does not exist. ";
    return res.status(400).json(output);
  }

  try {
    let x = await pool.query(
      `UPDATE ${TBL_DEPOSITS} SET DStatus=? WHERE DReference=?`,
      [depositStatus, depositReference]
    );
    if (x.changedRows === 1) {
      let title = `Deposit ${depositStatus}`;
      let message = `Your deposit with Reference ID-${result[0].depositReference} has been ${depositStatus}. Thanks for your continuous patronage.`;
      await pool.query(
        `INSERT INTO ${TBL_MESSAGES} (OMSender,OMReceiver,OMTitle,OMMessage) VALUES (?)`,
        [[id, result[0].userId, title, message]]
      );
      if (depositStatus == "approved") {
        await pool.query(
          `UPDATE ${TBL_USERS} SET UBalance=UBalance+? WHERE UId=?`,
          [result[0].depositAmount, result[0].userId]
        );
      }
    }
  } catch (e) {
    output.message = "Deposit update failed";
    return res.status(400).json(output);
  }

  output.flag = true;
  output.message = "Deposit update was successful";
  output.data = {};
  res.status(200).json(output);
});

router.get("/:depositReference?", [authMW], async (req, res) => {
  let output = { flag: false, message: "", data: {} };
  let { id, privilege } = req.user;
  if (!req.params.depositReference) {
    output.message = "No reference was provided";
    return res.status(400).json(output);
  }
  let { depositReference } = req.params;

  let result = await pool.query(
    `SELECT a.DId as depositId,a.DReference as depositReference,a.DUId as userId,ROUND(a.DAmount,2) as depositAmount,a.DWallet as depositWallet,a.DHash as depositHash,a.DStatus as depositStatus,a.DCreatedAt as createdAt FROM ${TBL_DEPOSITS} a  WHERE a.DReference=? `,
    [depositReference]
  );
  if (result.length < 1) {
    output.message = "Deposit with provided reference does not exist. ";
    return res.status(400).json(output);
  }

  output.flag = true;
  output.message = "Deposit details successfully fetched";
  output.data = result[0];
  res.status(200).json(output);
});

module.exports = router;
