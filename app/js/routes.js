/*
define(['./js/app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'index.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
});
*/

HolidayHome.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'index.html'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);