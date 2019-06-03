'use strict';
module.exports = function(app) {
  var controller = require('../controllers/mvc/productViewController');
  
  app.route('/products/new')
    .get(controller.new);
};
