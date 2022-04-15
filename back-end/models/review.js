const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewInfo = new Schema(
  {
    review_stars: Number,
    review_text: String,
    doctor_user_id: { type: Schema.Types.ObjectId, ref: "doctor" },
    patient_user_id: { type: Schema.Types.ObjectId, ref: "patient" },
    appointment_id: { type: Schema.Types.ObjectId, ref: "appointment" },
  },
  { collection: "review", timestamps: { createdAt: "creation_date" } }
);
const review = mongoose.model("review", reviewInfo);
module.exports = review;
