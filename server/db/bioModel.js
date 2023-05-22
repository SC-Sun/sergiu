const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  bio: String,
});
const Bio = mongoose.model("bio", bioSchema);

module.exports = Bio;
