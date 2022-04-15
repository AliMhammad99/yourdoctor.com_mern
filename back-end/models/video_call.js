const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoCallInfo = new Schema(
  {
    end_time: Date,
    sender_account_id: { type: Schema.Types.ObjectId, ref: "account" },
    receiver_account_id: { type: Schema.Types.ObjectId, ref: "account" },
  },
  { collection: "video_call", timestamps: { createdAt: "creation_date" } }
);
const video_call = mongoose.model("video_call", videoCallInfo);
module.exports = video_call;
