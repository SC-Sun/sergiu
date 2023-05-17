const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  theme: String,
  text: String,
  info: String,
});
const News = mongoose.model("news", newsSchema);
module.exports = News;
