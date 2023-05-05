const  mongoose  = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: String,
    tour_date: String,
    info: String
});
const Tours = mongoose.model('tours', tourSchema);

module.exports = Tours;