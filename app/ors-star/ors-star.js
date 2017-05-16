(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            template: '<img ng-repeat="i in [1,2,3,4,5]" src="ors-star/img/yellow_star.png"/>',
            controller: function OrsHeaderCtrl() {
                'ngInject';
                console.log('OrsStarCtrl', arguments);
            },
        };
    });

})();