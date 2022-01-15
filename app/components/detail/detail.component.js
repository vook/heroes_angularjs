'use strict';

angular.module('MarvelHeroes.detail', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/detail/:id', {
        templateUrl: 'components/detail/detail.component.html',
        controller: 'DetailCtrl'
    });
}])

.controller('DetailCtrl', ['$http', '$scope', '$routeParams', function ($http, $scope, $routeParams) {
    $scope.isReady = false;

    $http.get('https://gateway.marvel.com/v1/public/characters/' + $routeParams.id, {
        params: {
            'apikey': 'f95057ce91b4f2dd307119abcc9c6e00',
        }
    }).then(function (response) {
        $scope.hero = response.data.data.results[0];
        $scope.isReady = true;
        return response;
    });
}]);