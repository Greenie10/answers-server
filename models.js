const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  Question: String,
  Location: String,
  Zone: String,
  Date: String,
  Answers: [{ Gardener: String, AnAnswer: String }]
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = {
  QuestionModel
};
