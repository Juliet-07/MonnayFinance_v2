const jwt = require('jsonwebtoken');
const {
  pool,
  TBL_USERS
} = require("../db/db");

module.exports = async function (req, res, next) {
  let output = { flag: false, message: "", data: {} };
  const tokens = req.header('Authorization');
  if (!tokens){
    output.message="Access denied. No token provided";
    return res.status(401).json(output);
  }
  try {
    const decoded = jwt.verify(tokens, process.env.JWTPRIVATEKEY);
    req.user = decoded; 
    let {id,token,privilege}=req.user;

    let cUser=  await pool.query(`SELECT * FROM  ${TBL_USERS} WHERE UId =? AND UPrivilege=? AND UToken=?`, [id,privilege,token]);

    if (cUser.length < 1) {
      output.message = "Error! User does not exist or credentials changed. Please re-login";
      return res.status(401).json(output);
    }
    if (cUser[0].UStatus=="inactive") {
      output.message = "Account appears to be inactive!";
      return res.status(401).json(output);
    }
    if (cUser[0].UStatus=="suspended") {
      output.message = "Account appears to be suspended, Please contact Admin!";
      return res.status(401).json(output);
    }
    next();
  }
  catch (ex) {
    output.message="Invalid token.";
    return res.status(401).json(output);
  }
}