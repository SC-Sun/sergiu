const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 5000;
// require database connection
const dbConnect = require("./db/dbConnect");
const Tours = require("./db/tourModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

dbConnect();

app.get("/tours", (req, res) => {
  Tours.find()
    .then((tour) => {
      res.status(200).json(tour);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));