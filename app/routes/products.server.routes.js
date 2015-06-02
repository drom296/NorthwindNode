'use strict';

module.exports = function(app) {
	var products = require('../../app/controllers/products.server.controller.js');
    var users = require('../../app/controllers/users.server.controller');

    app.route('/products')
        .get(products.list)
        .post(users.requiresLogin, products.create)
    ;

    app.route('/products/:productId')
        .get(products.read)
        .put(users.requiresLogin, products.update)
        .delete(users.requiresLogin, products.delete)
    ;

    app.param('productId', products.productByID);
};