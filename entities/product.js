'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Product = new Schema({
  nome: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  },
  receita: {
    type: String,
    default: ""
  },
  votos: {
    type: Number,
    default: ""
  }
});

module.exports = mongoose.model('Product', Product);