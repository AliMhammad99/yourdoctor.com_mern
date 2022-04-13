const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    basic_user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    years_of_experience: Number,
    spoken_languages: [
      {
        type: String,
      },
    ],
    professional_biography: String,
    specialty: String,
    certificate: { certificate_image: String, is_verified: Boolean },
    clinic: {
      clinic_name: String,
      clinic_location: { x: Number, y: Number, region_name: String },
    },
    appointment_reasons: [
      {
        appointment_reason: String,
        cost: Double,
      },
    ],
    available_dates: [
      {
        available_date_from: Date,
        available_date_to: Date,
      },
    ],
  },
  { collection: "doctor" }
);
const user = mongoose.model("basic_user", userInfo);
module.exports = user;
