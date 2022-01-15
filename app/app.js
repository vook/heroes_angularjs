'use strict';

// Declare app level module which depends on views, and core components
angular.module('MarvelHeroes', [
    'ngRoute',
    'MarvelHeroes.blocks',
    'MarvelHeroes.detail',
    'MarvelHeroes.heroes',
    'MarvelHeroes.directives',
])

.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/heroes/1'});
}]);
