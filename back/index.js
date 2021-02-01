const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const itemRouter = require("./routers/item");

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("database connected!");
});

const PORT = process.env.PORT || 3000;

// app.use(express.static("../front/dist/index.html"));

// app.get("/*", (req, res) =>
//   res.sendFile("index.html", { root: "../front/dist/" })
// );

app.use("/api/items", itemRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log("listening on: " + PORT);
});
