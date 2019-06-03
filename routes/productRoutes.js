'use strict';
module.exports = function(app) {
  var controller = require('../controllers/api/productController');
  
  app.route('/products')
    .get(controller.get_products)
    .post(controller.create_a_product);

  app.route('/products/:productId')
    .get(controller.get_a_product)
    .put(controller.update_a_product)
    .delete(controller.delete_a_product);
};
