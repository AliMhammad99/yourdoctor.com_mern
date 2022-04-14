const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    first_name: String,
    last_name: String,
    gender: String,
    date_of_birth: Date,
    phone_number: Number,
    profile_picture: String,
    user_type: String,
  },
  { collection: "basic_user" }
);
const user = mongoose.model("basic_user", userInfo);
module.exports = user;
