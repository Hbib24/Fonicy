const Item = require("../models/item");

exports.getAll = function () {
  return Item.find();
};

exports.insertOne = function (item) {
  return Item.create(item);
};
