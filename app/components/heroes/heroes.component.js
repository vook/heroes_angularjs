'use strict';

angular.module('MarvelHeroes.heroes', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/heroes/:page', {
        templateUrl: 'components/heroes/heroes.component.html',
        controller: 'HeroesCtrl'
    });
}])

.controller('HeroesCtrl', ['$http', '$scope', '$routeParams', function ($http, $scope, $routeParams) {
    var limit = 20;
    var page = $scope.page = parseInt($routeParams.page);
    $scope.isReady = false;
    $scope.heroes = [];
    $scope.heroName = '';

    function loadData() {
        $scope.isReady = false;
        $http.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                'apikey': 'f95057ce91b4f2dd307119abcc9c6e00',
                'offset': (page - 1) * limit + 1,
                'limit': limit,
                'nameStartsWith': $scope.heroName ? $scope.heroName : undefined,
            }
        }).then(function (response) {
            $scope.isReady = true;
            $scope.heroes = response.data.data.results;
            return response;
        });
    }

    $scope.search = function () {
        loadData();
    };
    loadData();
}]);