'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('Product');

exports.get_a_product = function (req, res) {
  Product.findById(req.params.productId).then(response => {
    res.send(response);
  });
};

exports.get_products = function (req, res) {
  Product.find().then(response => {
    res.send(response);
  });
};

exports.create_a_product = function (req, res) {
  var new_product = new Product(req.body);
  new_product.save().then(response => {
    res.send(response);
  });
};

exports.update_a_product = function (req, res) {
  Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true })
  .then(response => {
    res.send(response);
  });
};


exports.delete_a_product = function (req, res) {
  Product.remove({ _id: req.params.productId })
    .then(response => {
      res.send(response);
    });
};