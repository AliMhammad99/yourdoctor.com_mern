const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageInfo = new Schema(
  {
    message_text: String,
    sender_account_id: { type: Schema.Types.ObjectId, ref: "account" },
    receiver_account_id: { type: Schema.Types.ObjectId, ref: "account" },
  },
  { collection: "message", timestamps: { createdAt: "creation_date" } }
);
const message = mongoose.model("message", messageInfo);
module.exports = message;
