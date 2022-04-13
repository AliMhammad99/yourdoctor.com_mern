const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    title: String,
    description: String,
    importance: String, //low medium high urgent
    cleared: Boolean,
    is_viewed: Boolean,
  },
  { collection: "notification", timestamps: { createdAt: "creation_date" } }
);
const notification = mongoose.model("notification", userInfo);
module.exports = notification;
