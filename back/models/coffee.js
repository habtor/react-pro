const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: String,
  description: String,
  image: String,
});

const CoffeeModel = mongoose.model("coffee", CoffeeSchema);
module.exports = CoffeeModel;
