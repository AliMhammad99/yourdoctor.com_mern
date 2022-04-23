const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelInfo = new Schema(
  {
    specialty_name: String,
  },
  { collection: "specialty" }
);
const model = mongoose.model("specialty", modelInfo);
module.exports = model;
