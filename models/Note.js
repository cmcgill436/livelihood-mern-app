const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  color: String,
});

module.exports = mongoose.model("Note", noteSchema);
