(function () {
    'use strict';

    var app = angular.module('ors-route', ['ui.router']);

    app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        'ngInject';

        $locationProvider
            .html5Mode(true);

        $stateProvider.state({
            name: 'home',
            url: '/',
            templateUrl: './ors-route/tmpl/home.html'
        });
        $stateProvider.state({
            name: 'products',
            url: '/produits',
            templateUrl: './ors-route/tmpl/products.html'
        });
        $stateProvider.state({
            name: 'services',
            url: '/services',
            templateUrl: './ors-route/tmpl/services.html'
        });
        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            templateUrl: './ors-route/tmpl/contact.html'
        });
        $urlRouterProvider.otherwise('/');
    });

})();