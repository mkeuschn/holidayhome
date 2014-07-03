define(function(require){
    'use strict';

    var angular = require('angular');

    var app = angular.module('HolidayHome', ['ngRoute']);

    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',

            function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
            {
                app.controller = $controllerProvider.register;
                app.directive  = $compileProvider.directive;
                app.filter     = $filterProvider.register;
                app.factory    = $provide.factory;
                app.service    = $provide.service;

                $locationProvider.html5Mode(true);

                $routeProvider.when('/', {
                    templateUrl: 'index.html'
                }).otherwise({
                    redirectTo: '/'
                });
            }
        ]);

    return app;
});