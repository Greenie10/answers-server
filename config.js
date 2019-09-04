const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_GQT;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
