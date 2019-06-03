angular.module('coursin', ['ngRoute','coursinServicos', 'coursinDiretivas'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/products.html',
			controller: 'productsController'
		});

		$routeProvider.when('/product/:productId', {
			templateUrl: 'partials/product.html',
			controller: 'productController'
		});

		$routeProvider.when('/product', {
			templateUrl: 'partials/newProduct.html',
			controller: 'newProductController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});