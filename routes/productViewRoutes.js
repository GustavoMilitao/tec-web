'use strict';
module.exports = function(app) {
  var controller = require('../controllers/mvc/productViewController');
  
  app.route('/views/products')
    .get(controller.new);
};
