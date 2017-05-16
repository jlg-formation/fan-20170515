(function () {
    'use strict';

    var app = angular.module('main', ['ors-star']);

    app.directive('orsHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/ors-header.html',
            scope: true,
            transclude: true,
            controller: function OrsHeaderCtrl($scope, $element, $attrs, $injector, $q, $filter, $http) {
                'ngInject';
                console.log('OrsHeaderCtrl', arguments);
            },
            link: function() {
                console.log('link', arguments);
            }
        };
    });

    app.directive('orsBody', function () {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/ors-body.html',
        };
    });

    app.directive('orsFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'tmpl/ors-footer.html',
        };
    });
})();