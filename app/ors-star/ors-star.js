(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            template: '<img src="ors-star/img/yellow_star.png"/>',
            controller: function OrsHeaderCtrl() {
                'ngInject';
                console.log('OrsStarCtrl', arguments);
            },
        };
    });

})();