const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  Question: String,
  Location: String
});

const Question = mongoose.model("question", questionSchema);

module.exports = {
  Question
};
// const gardenerSchema = new Schema({
//   name: String
// });

// const Gardener = mongoose.model("gardener", gardenerSchema);

// module.exports = {
//   Gardener
// };
