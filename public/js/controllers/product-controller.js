angular.module('coursin')
	.controller('productController',

		function ($scope, $routeParams, products) {
			$scope.ready = false;
			products.getProduct($routeParams.productId).then(function (data) {
				$scope.product = data.data;
				$scope.ready = true;
			}, function (erro) {
				alert('erro ao tentar obter o produto selecionado');
			});

			$scope.vote = () => {
				$scope.product.votos++;
				products.updateProduct($scope.product);
			}
		});