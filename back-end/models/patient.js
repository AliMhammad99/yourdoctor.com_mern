const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelInfo = new Schema(
  {
    basic_user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    total_spent: {
      type: Number,
      default: 0,
    },
  },
  { collection: "patient" }
);
const model = mongoose.model("patient", modelInfo);
module.exports = model;
