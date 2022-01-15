'use strict';

angular.module('MarvelHeroes.directives', [])

.directive('heroCard', [function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/hero-card/hero-card.directive.html',
        scope: {
            heroes: '<'
        },
    };
}]);