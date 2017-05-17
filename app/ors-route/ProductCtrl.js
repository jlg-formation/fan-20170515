(function () {
    'use strict';

    var app = angular.module('ors-route');

    app.controller('ProductCtrl', function ProductCtrl($http, $q) {
        'ngInject';
        this.start = function () {
            console.log('Start');
            $http.get('ws/s1').then(function (response) {
                console.log('response', response);
                return $q.all([$http.get('ws/s2').then(function () {
                    return $http.get('ws/s5');
                }), $http.get('ws/s3'), $http.get('ws/s4')]);
            }).then(function () {
                return $http.get('ws/s6');
            }).catch(function (error) {
                console.error('Error', error);

            });
        }
    });
})();