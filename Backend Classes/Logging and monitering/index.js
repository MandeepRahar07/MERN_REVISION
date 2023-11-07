const express = require("express");
const winston = require("winston");
const expressWinston = require("express-winston");
require('winston-mongodb')
const app = express();
app.use(express.json());


app.use(
  expressWinston.logger({
    transports: [
      // Use "transports" instead of "transport"
      new winston.transports.Console({
        json: true,
        colorize: true,
        level: "info"
      }),

      //to transport to a file
      new winston.transports.File({
        level : "info",
        filename : "infologs.log"
      }),
      // to transport to mongodb
      new winston.transports.Console({
        db : "mongodb://localhost:27017/applogs",
        level : "info"
      })
    ],
      format : winston.format.prettyPrint(),
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/results", (req, res) => {
  res.send("result me");
});

app.get("/reports", (req, res) => {
    const token = req.query.token;
    if (token != 123) {
      const errorMessage = "Unauthorized";
      console.error(errorMessage); // Log the error
      res.status(401).send(errorMessage);
    } else {
      res.send("reports me");
    }
  });
  

app.listen(8000, () => {
  console.log("8000 is running dear");
});
