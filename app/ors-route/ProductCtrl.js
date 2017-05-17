(function () {
    'use strict';

    var app = angular.module('ors-route');

    app.controller('ProductCtrl', function ProductCtrl($http) {
        'ngInject';
        this.start = function () {
            console.log('Start');
            $http.get('ws/s1').then(function (response) {
                console.log('response', response);
            }).catch(function (error) {
                console.error('Error', error);

            });
        }
    });
})();