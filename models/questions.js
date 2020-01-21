const { Schema } = require("mongoose");

module.exports = new Schema({
  Question: String,
  Location: String,
  Zone: String,
  Date: String,
  Answers: [{ Gardener: String, AnAnswer: String }]
});
