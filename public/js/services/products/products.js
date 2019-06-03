angular.module('coursinServicos')
    .factory("products", function ($http) {

        var service = {};
        service.getProducts = function () {
            return $http({
                // domínio do crossorigin.me utilizado para 
                //solucionar o erro de CORS quando chamado o reproduct.
                url: '/products',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });
        }

        service.getProduct = function (id) {
            return $http({
                // domínio do crossorigin.me utilizado para 
                //solucionar o erro de CORS quando chamado o reproduct.
                url: `/products/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });
        }
        

        service.updateProduct = function (product) {
            return $http({
                // domínio do crossorigin.me utilizado para 
                //solucionar o erro de CORS quando chamado o reproduct.
                url: `/products/${product._id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data : product
            });
        }

        service.saveProduct = function (product) {
            return $http({
                // domínio do crossorigin.me utilizado para 
                //solucionar o erro de CORS quando chamado o reproduct.
                url: `/products`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data : product
            });
        }

        return service;
    });