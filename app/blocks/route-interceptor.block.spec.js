'use strict';

describe('MarvelHeroes.blocks block', function () {

    beforeEach(module('MarvelHeroes.blocks'));

    it('should test function back()', inject(function ($rootScope, $location) {
        $location.path('/test1');
        $rootScope.$broadcast('$routeChangeSuccess');
        $location.path('/test2');
        $rootScope.$broadcast('$routeChangeSuccess');
        $rootScope.back();
        expect($location.url()).toEqual('/test1');
    }));
});