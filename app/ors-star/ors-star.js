(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            template: function () {
                return '<img ng-repeat="i in [1,2,3,4,5]" ng-src="{{getImage(i)}}"/>';
            },
            controller: function OrsHeaderCtrl($scope) {
                'ngInject';
                console.log('OrsStarCtrl', arguments);
                var note = 3;
                $scope.getImage = function (i) {
                    if (i > note) {
                        return 'ors-star/img/white_star.png';
                    }

                    return 'ors-star/img/yellow_star.png';


                }
            },
        };
    });

})();