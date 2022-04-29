const mongoose = require("mongoose");
const modelInfo = new mongoose.Schema(
  {
    specialty_name: {
      type: String,
      required: true,
    },
  },
  { collection: "specialty" }
);
module.exports = mongoose.model("specialty", modelInfo);
