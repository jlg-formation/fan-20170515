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
                n: '=?note'
            },
            controller: function OrsHeaderCtrl($scope, $element, $attrs, $compile) {
                'ngInject';
                console.log('OrsStarCtrl', arguments);

                $scope.update = function (i) {
                    console.log('update');
                    $scope.n = i;
                };

                $scope.$watch('n', function () {
                    var html = '';
                    var n2 = $scope.n || 3;
                    n2 = (n2 > 5) ? 5 : n2;
                    n2 = (n2 < 0) ? 0 : n2;
                    for (var i = 0; i < n2; i++) {
                        html += '<img ng-click="update(' + (i + 1) + ')" src="ors-star/img/yellow_star.png"/>';
                    }
                    for (i = n2; i < 5; i++) {
                        html += '<img ng-click="update(' + (i + 1) + ')" src="ors-star/img/white_star.png"/>';
                    }
                    $element.html(html);
                    // $compile pour compiler et puis $element.contents() pour recuperer le DOM
                    $compile($element.contents())($scope);
                });

            }
        };
    });

})();