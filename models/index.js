const mongoose = require("mongoose");
const questionSchema = require("./questions");
const userSchema = require("./users");

const UserModel = mongoose.model("user", userSchema);
const QuestionModel = mongoose.model("question", questionSchema);

module.exports = {
  QuestionModel,
  UserModel
};
