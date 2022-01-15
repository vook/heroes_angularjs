'use strict';

describe('MarvelHeroes.detail module', function () {

    beforeEach(module('MarvelHeroes.detail'));

    var $controller, $http, $routeParams;
    var $scope = {};

    beforeEach(inject(function (_$controller_, _$http_, _$routeParams_) {
        $controller = _$controller_;
        $http = _$http_;
        $routeParams = _$routeParams_;
    }));

    describe('detail controller', function () {

        it('should start not ready', function () {
            $controller('DetailCtrl', {
                $http: $http,
                $scope: $scope,
                $routeParams: $routeParams
            });
            expect($scope.isReady).toBeFalsy();
        });

        it('should load content', inject(function ($httpBackend) {
            $routeParams.id = 1;
            var hero = {
                id: 1,
                name: 'hero',
                description: "blabblabla",
                modified: '2001-01-01T00:00:00-0400',
                thumbnail: {
                    path: 'string',
                    extension: 'jpg',
                },
                stories: {
                    items: [{
                        name: 'string'
                    }],
                },
            };
            var response = {
                data: {
                    results: [
                        hero,
                    ],
                },
            };
            $httpBackend.expectGET(/.*?apikey=[0-9a-f]+/g)
                .respond(response);

            $controller('DetailCtrl', {
                $http: $http,
                $scope: $scope,
                $routeParams: $routeParams
            });

            $httpBackend.flush();
            expect($scope.isReady).toBeTruthy();
            expect($scope.hero).toEqual(hero);
        }));

    });
});