'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('Products');

exports.get_a_product = function (req, res) {
  Product.find({ _id: req.params.productId }).then((err, response) => {
    var success = { success: !err || false };
    res.send(success ? { success: success, product: response }
      : { success });
  });
};

exports.get_products = function (req, res) {
  Product.find({}).then((err, response) => {
    var success = { success: !err || false };
    res.send(success ? { success: success, product: response }
      : { success });
  });
};

exports.create_a_product = function (req, res) {
  var new_product = new Product(req.body);
  new_product.save(function (err, response) {
    var success = { success: !err || false };
    res.send(success ? { success: success, user: response } : { success });
  });
};

exports.update_a_product = function (req, res) {
  Product.findOneAndUpdate({ _id: req.params.productId },
    req.body,
    { new: true }).then((err, response) => {
      var success = { success: !err || false };
      res.send(success ? { success: success, user: response } : { success });
    });
};


exports.delete_a_product = function (req, res) {
  Product.remove({ _id: req.params.productId })
    .then((err, response) => {
      var success = { success: !err || false };
      res.send(success ? { success: success, user: response } : { success });
    });
};