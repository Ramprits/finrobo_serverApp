const mongoose = require("mongoose");

const Loan = new mongoose.Schema({
  name: { type: String, required: true, min: 5, max: 255 },
  description: { type: String, required: true, min: 5, max: 255 },
  image: { type: String, default: "" },
  url: { type: String, default: "/home" },
  created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Loan", Loan);
