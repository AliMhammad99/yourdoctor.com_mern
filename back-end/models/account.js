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

userInfo.statics.findAccount = async function (email, password) {
  const resultAccount = await account.findOne({ email, password });
  if (resultAccount) {
    return resultAccount;
  } else {
    return;
  }
};
const account = mongoose.model("account", userInfo);
module.exports = account;
