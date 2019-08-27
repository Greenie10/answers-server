const mongoose = require("mongoose");
const { Schema } = mongoose;

const gardenerSchema = new Schema({
  name: String
});

const Gardener = mongoose.model("gardener", gardenerSchema);

module.exports = {
  Gardener
};
