const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelInfo = new Schema(
  {
    //patient_user_id refers to basic_user_id inside patient not _id
    patient_user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    appointment_reason_id: {
      type: Schema.Types.ObjectId,
      ref: "appointment_reason",
    },
    available_date_id: { type: Schema.Types.ObjectId, ref: "available_date" },
    appointment_type: String, //Online or OnClinic
    is_done: Boolean, //Set to true after payment. Required for reviewing.
  },
  {
    collection: "appointment",
    timestamps: { createdAt: "creation_date", updatedAt: "modification_date" },
  }
);
const model = mongoose.model("appointment", modelInfo);
module.exports = model;
