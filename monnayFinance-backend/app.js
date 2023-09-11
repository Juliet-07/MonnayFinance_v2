const dev = process.env.NODE_ENV == "production" ? false : true;
if (dev) {
  require("dotenv").config();
} else {
  require("dotenv").config({ path: "production.env" });
}

const express = require("express");
const app = express();
var morgan = require("morgan");
app.use(morgan("combined"));
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const log = require("./config/log4js");

const allowedOrigins = [
  "https://monnayfinance.com",
  "https://monnayfinance.online",
  "http://127.0.0.1",
  "http://localhost:3000",
  "https://monnay-finance.vercel.app",
];

app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: false,
    parameterLimit: 1000000,
  })
);
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: true,
    optionsSuccessStatus: 204,
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-with",
      "Accept",
      "Authorization",
    ],
  })
);
app.use(helmet());

if (!process.env.JWTPRIVATEKEY) {
  log.info(`FATAL ERROR: jwtPrivateKey is not found`);
  console.log("FATAL ERROR: jwtPrivateKey is not found");
  process.exit(1);
}

app.get("/api/", async (req, res) => {
  res.status(200).send(new Date());
});

app.use(express.static("./"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/logs", require("./routes/logs"));
app.use("/api/deposit", require("./routes/deposit"));
app.use("/api/deposits", require("./routes/deposits"));
app.use("/api/withdrawal", require("./routes/withdrawal"));
app.use("/api/withdrawals", require("./routes/withdrawals"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/wallets", require("./routes/wallets"));
app.use("/api/investments", require("./routes/investments"));
app.use("/api/investment", require("./routes/investment"));
app.use("/api/referrals", require("./routes/referrals"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  log.info(`🚀 Listening to server on port ${port}`);
  console.log(`Listening on port ${port}`);
});
