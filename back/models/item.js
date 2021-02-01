const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  price: Number
});

const ItemModel = mongoose.model("item", itemSchema);

module.exports = ItemModel;
