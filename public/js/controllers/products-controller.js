angular.module('coursin')
	.controller('productsController', function ($scope, products) {
		$scope.products = [];
		$scope.ready = false;
		products.getProducts().then(function (data) {
			$scope.products = data.data;
			$scope.ready = true;
		}, function (erro) {
			alert('erro ao tentar obter a lista de products.');
		});
	});