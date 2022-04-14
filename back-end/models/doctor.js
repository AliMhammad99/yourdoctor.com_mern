const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelInfo = new Schema(
  {
    /*Even mongodb will automatically insert an _id, we can still use
    basic_user_id as identifier because it is unique*/
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
      name: String,
      location: { x: Double, y: Double, region_name: String },
    },
  },
  { collection: "doctor" }
);
const model = mongoose.model("doctor", modelInfo);
module.exports = model;
