const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var multer = require("multer");

const PORT = process.env.PORT || 3000;

app.use(express.static("../front/dist/index.html"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "../front/dist/" })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
require("./models/index");

app.listen(PORT, () => {
  console.log("listening on: " + PORT);
});
