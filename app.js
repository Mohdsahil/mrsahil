require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
// mY rOUTES
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blog");
// \
app.use(bodyParser.json());

// app.use(express.json());
app.use(cookieParser());
app.use(cors());
// mY dB cONNECTION

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("dB cONNECTED....!");
  })
  .catch((err) => console.log(err));

//   mY rOUTES
app.use("/api", authRouter);
app.use("/api", blogRouter);

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`aPP iS uP aND rUNNING...! oN ${PORT}`);
});
