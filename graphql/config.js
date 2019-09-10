const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_GQT;
console.log("TCL: url", url);

mongoose.connect(process.env.MONGODB_GQT, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
