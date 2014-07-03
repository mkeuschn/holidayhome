require.config({
    // baseUrl: './js/.',

    // alias library paths
    paths: {
        'domReady' : '../lib/require/domReady',
        'jquery' : '../lib/jquery/jquery-1.11.1.min',
        'angular' : '../lib/angular/angular.min',
        'angular-resource' : '../lib/angular/angular-resource.min',
        'angular-route' : '../lib/angular/angular-route.min',
        'bootstrap' : '../lib/bootstrap/js/bootstrap.min',
        'holder' : '../lib/holder/holder'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angular-resource' : {
            deps: ['angular']
        },
        'angular-route' : {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'app': {
            deps: ['angular', 'angular-route', 'bootstrap', 'holder']
        }
    }
});

define(function (require, exports, module) {
    var map = require('map'),
        app = require('app'),
        contentCtrl = require('components/content/content-controller'),
        navbarCtrl = require('components/navbar/navbar-controller');
    angular.bootstrap(document, ['HolidayHome']);
});