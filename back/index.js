const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CoffeeModel = require("./models/coffee");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/shop");

app.get("/", (req, res) => {
  CoffeeModel.find()
    .then((coffee) => res.json(coffee))
    .catch((err) => res.json(err));
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  CoffeeModel.findById(productId)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server running");
});
