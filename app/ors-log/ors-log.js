(function () {
    'use strict';

    var app = angular.module('ors-log', []);

    app.config(function ($provide) {
        'ngInject';

        $provide.decorator('$log',
            function $logDecorator($delegate, orsLogService) {
                'ngInject';
                var originalDebug = $delegate.debug;
                $delegate.debug = function decoratedDebug() {
                    orsLogService.logs.push([arguments]);
                    originalDebug.apply($delegate, arguments);
                };

                return $delegate;
            }
        );
    });

    app.run(function ($document, $compile, $rootScope) {
        'ngInject';
        var elt = angular.element('<ors-log></ors-log>');
        angular.element($document[0].body).append(elt);
        // $compile(elt)($rootScope);
    });
    app.service('orsLogService', function OrsLogService() {
        this.logs = [];
    });
    app.directive('orsLog', function () {
        return {
            restrict: 'E',
            template: '<ul><li ng-repeat="log in $ctrl.logs">{{:: log}}</li></ul>',
            controller: function OrsLogCtrl($log, orsLogService) {
                'ngInject';
                console.log('orsLog ctrl', arguments, this);
                this.logs = orsLogService.logs;
            },
            controllerAs: '$ctrl'
        };
    });

})();