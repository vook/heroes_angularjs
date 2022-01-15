'use strict';

describe('MarvelHeroes.directives hero-card', function () {
    var $compile;

    beforeEach(module('MarvelHeroes.directives'));

    beforeEach(inject(function ($templateCache) {
        var path = 'directives/hero-card/hero-card.directive.html';
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'base/' + path, false);
        xhr.send();
        $templateCache.put(path,  xhr.responseText);
    }));

    beforeEach(inject(function (_$compile_) {
        $compile = _$compile_;
    }));

    it('Replaces the element with the appropriate content', inject(function ($rootScope) {
        var $scope = $rootScope.$new();
        $scope.heroes = [{
            id: 1,
            name: 'hero',
            thumbnail: {
                path: 'string',
                extension: 'jpg',
            },
        }];
        var element = $compile("<hero-card heroes='heroes'></hero-card>")($scope);
        $rootScope.$digest();
        expect(element.html()).toContain('<a href="/#!/detail/1">');
        expect(element.html()).toContain('<h3 class="text-white fw-bold ng-binding">hero</h3>');
        expect(element.html()).toContain('src="string/portrait_uncanny.jpg"');
    }));
});