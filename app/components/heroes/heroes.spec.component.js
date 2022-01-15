'use strict';

describe('MarvelHeroes.heroes module', function () {

    beforeEach(module('MarvelHeroes.heroes'));

    var $controller, $http, $routeParams;
    var $scope = {};

    beforeEach(inject(function (_$controller_, _$http_, _$routeParams_) {
        $controller = _$controller_;
        $http = _$http_;
        $routeParams = _$routeParams_;
    }));

    describe('heroes controller', function () {

        it('should start not ready', inject(function ($controller) {
            $routeParams.page = '1';
            $controller('HeroesCtrl', {
                $http: $http,
                $scope: $scope,
                $routeParams: $routeParams
            });
            expect($scope.isReady).toBeFalsy();
            expect($scope.heroes).toEqual([]);
            expect($scope.heroName).toEqual('');
            expect($scope.page).toEqual(1);
        }));

        it('should load content', inject(function ($httpBackend) {
            $routeParams = '1';
            var heroes = [{
                id: 1,
                name: 'hero',
                thumbnail: {
                    path: 'string',
                    extension: 'jpg',
                },
            }];
            var response = {
                data: {
                    results: heroes,
                },
            };
            $httpBackend.expectGET(/.*?apikey=[0-9a-f]+/g)
                .respond(response);

            $controller('HeroesCtrl', {
                $http: $http,
                $scope: $scope,
                $routeParams: $routeParams
            });

            $httpBackend.flush();
            expect($scope.isReady).toBeTruthy();
            expect($scope.heroes).toEqual(heroes);
        }));
    });
});