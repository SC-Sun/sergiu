const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  name: String,
  about: String,
  photo: String,
  link: String,
});
const Work = mongoose.model("work", workSchema);

module.exports = Work;
