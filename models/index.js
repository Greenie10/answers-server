const mongoose = require("mongoose");
import questionSchema from "./questions";
import userSchema from "./users";

const UserModel = mongoose.model("user", userSchema);
const QuestionModel = mongoose.model("question", questionSchema);

module.exports = {
  QuestionModel,
  UserModel
};
