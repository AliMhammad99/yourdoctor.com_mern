const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema(
  {
    account_sender_id: { type: Schema.Types.ObjectId, ref: "account" },
    account_receiver_id: { type: Schema.Types.ObjectId, ref: "account" },
    amount: Number,
    transaction_type: String, //payment withdraw fill the balance
  },
  { collection: "account", timestamps: { createdAt: "transaction_date" } }
);
const account = mongoose.model("account", userInfo);
module.exports = account;
