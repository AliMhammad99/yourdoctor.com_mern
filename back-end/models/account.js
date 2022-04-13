const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    email: String,
    username: String,
    password_salt: String,
    password_hash: String,
    balance: Number,
    is_activated: Boolean,
    user_id: { type: Schema.Types.ObjectId, ref: "basic_user" },
    notifications: [{ type: Schema.Types.ObjectId, ref: "notification" }],
  },
  { collection: "account", timestamps: { createdAt: "creation_date" } }
);
const account = mongoose.model("account", userInfo);
module.exports = account;
