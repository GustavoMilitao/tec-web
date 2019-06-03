'use strict';
module.exports = function(app) {
  var controller = require('../controllers/api/productController');
  
  app.route('/products')
    .get(controller.get_products)
    .post(controller.create_a_team);

  app.route('/products/:teamId')
    .get(controller.get_a_product)
    .put(controller.update_a_team)
    .delete(controller.delete_a_team);
};
