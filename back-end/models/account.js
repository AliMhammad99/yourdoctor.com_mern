const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    email: String,
    username: String,
    password: String,
    balance: Number,
    is_activated: Boolean,
  },
  { collection: "account", timestamps: { createdAt: "creation_date" } }
);
const account = mongoose.model("account", userInfo);
module.exports = account;
