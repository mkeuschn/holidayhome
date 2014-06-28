require.config({
    // alias library paths
    paths: {
        'domReady' : '../lib/require/domReady',
        'angular' : '../lib/angular/angular.min',
        'angular-resource' : '../lib/angular/angular-resource.min',
        'angular-route' : '../lib/angular/angular-route.min',
        'bootstrap' : '../lib/bootstrap/js/bootstrap.min',
        'jquery' : '../lib/jquery/jquery-1.11.1.min',
        'holder' : '../lib/holder/holder'
    },

    // angular does not support AMD out of the box, put it in a shim
    // correct order is needed
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angular-resource' : {
            deps: ["angular"]
        },
        'angular-route' : {
            deps: ["angular"]
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});