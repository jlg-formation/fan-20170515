(function () {
    'use strict';

    var app = angular.module('ors-route');

    app.controller('ProductCtrl', function ProductCtrl($http, $q, $log) {
        'ngInject';
        this.start = function () {
            console.log('Start');
            $http.get('/ws/s1').then(function (response) {
                $log.debug('response', response);
                return $q.all([$http.get('/ws/s2').then(function (response) {
                    $log.debug('response', response);
                    return $http.get('/ws/s5');
                }), $http.get('/ws/s3'), $http.get('/ws/s4')]);
            }).then(function (responses) {
                $log.debug('responses', responses);
                return $http.get('/ws/s6');
            }).then(function (response) {
                $log.debug('response', response);
            }).catch(function (error) {
                console.error('Error', error);
            });
        }
    });
})();