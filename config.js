const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_GQT;
console.log("*****: url", url);

mongoose.connect(process.env.MONGODB_GQT, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
