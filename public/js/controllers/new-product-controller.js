angular.module('coursin')
	.controller('newProductController',

		function ($scope, $routeParams, products) {
			$scope.ready = true;
			$scope.newProduct = {};

			$scope.salvar = () => {
				$scope.newProduct.votos = 0;
				products.saveProduct($scope.newProduct).then(data => {
					$scope.newProduct = {};
					alert('Produto enviado com sucesso!');
				});
			}
		});