angular.module('coursinDiretivas')
    .directive('product', function () {

        var ddo = {};

        ddo.restrict = "AE";
        ddo.transclude = true;


        ddo.scope = {
            id: '@',
            nome: '@',
            url: '@',
            receita: '@',
            votos: '@',
        };

        ddo.templateUrl = 'js/directives/product/product.html';

        return ddo;
    });