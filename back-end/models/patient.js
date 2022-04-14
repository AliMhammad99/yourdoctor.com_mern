const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelInfo = new Schema(
  {
    basic_user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    location: { x: Double, y: Double, region_name: String },
    total_spent: Double,
  },
  { collection: "patient" }
);
const model = mongoose.model("patient", modelInfo);
module.exports = model;
