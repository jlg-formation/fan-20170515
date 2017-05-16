(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            template: function () {
                return '<img ng-repeat="i in [1,2,3,4,5]" ' +
                    'ng-click="update(i)" ng-src="{{getImage(i)}}"/>';
            },
            scope: {
                n: '=note'
            },
            controller: function OrsHeaderCtrl($scope, $attrs) {
                'ngInject';
                console.log('OrsStarCtrl', arguments);
                $scope.getImage = function (i) {
                    var n2 = $scope.n || 3;
                    if (i > n2) {
                        return 'ors-star/img/white_star.png';
                    }
                    return 'ors-star/img/yellow_star.png';
                };
                $scope.update = function (i) {
                    console.log('update');
                }
            }
        };
    });

})();