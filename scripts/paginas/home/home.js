﻿var app = angular.module('pokedeck', []);
app.controller('homeCtrl', function ($scope, $http, $timeout, $templateCache, $compile) {

    $scope.windowShow = 1;
    $scope.brade = "Home";

    $scope.user = [];
    $scope.alterWindows = alterWindows
    $scope.confirmVote = confirmVote
    
    getProducts();

    function alterWindows(page) {
        if (page === 1) {
            $scope.brade = "Home"
            $scope.windowShow = 1
        }
        else if (page === 2) {
            $scope.brade = "Home / Inserir"
            $scope.windowShow = 2
        }

    }

    function confirmVote(votes, id) {
        votes ++;
        $http({
            method: "PUT",
            url: `/products/${id}`,
            headers: {
                'Content-Type': "application/json"
            },
            data:{
                votos: votes
            }
        })
    }

    function getProducts() {
        $http({
            method: "GET",
            url: '/products/',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(function (success) {
                $scope.user = success.data;
            });
    }


});

