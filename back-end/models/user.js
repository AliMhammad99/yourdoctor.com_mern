const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userInfo = new Schema({
  name: String,
  age: Number,
});
const user = mongoose.model("user", userInfo);
module.exports = user;
