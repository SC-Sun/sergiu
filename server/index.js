const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 5000;
const dbConnect = require("./db/dbConnect");
const Tours = require("./db/tourModel");
const News = require("./db/newsModel");
const Bio = require("./db/bioModel");
const Work = require("./db/workModel");

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
      console.log(res);
      console.log(err);
      res.status(500).json({ err: err });
    });
});

app.get("/news", (req, res) => {
  News.find()
    .then((n) => {
      res.status(200).json(n);
    })
    .catch((err) => {
      console.log(res);
      console.log(err);
      res.status(500).json({ err: err });
    });
});

app.get("/bio", (req, res) => {
  Bio.find()
    .then((n) => {
      res.status(200).json(n);
    })
    .catch((err) => {
      console.log(res);
      console.log(err);
      res.status(500).json({ err: err });
    });
});

app.get("/work", (req, res) => {
  Work.find()
    .then((n) => {
      res.status(200).json(n);
    })
    .catch((err) => {
      console.log(res);
      console.log(err);
      res.status(500).json({ err: err });
    });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
