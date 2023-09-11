const express = require("express");
const Joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMW = require("../middleware/auth");

const {
    pool,
    TBL_WALLETS,
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

  let result = await pool.query(
    `SELECT SWBTC as btc,SWETH as eth,SWDODGE as doge,SWUSDT as usdt  FROM ${TBL_WALLETS} WHERE SWId=?  `,
    [1]
  );

  output.flag = true;
  output.message = "System wallets successfully fetched";
  output.data = result;
  res.status(200).json(output);
});




module.exports = router;
