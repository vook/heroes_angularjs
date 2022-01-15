'use strict';

angular.module('MarvelHeroes.blocks', [])

.run(['$rootScope', '$location', function ($rootScope, $location) {
    var maxHistory = 5;
    var history = [];
    $rootScope.$on('$routeChangeSuccess', function () {
        if (history.length >= maxHistory) {
            history.shift();
        }
        history.push($location.$$path);
    });

    $rootScope.back = function () {
        var url = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(url);
    };
}]);