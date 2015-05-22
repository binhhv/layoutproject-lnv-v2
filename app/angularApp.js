

var app = angular.module('myApp', ['ngResource','ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partial/home.html',
        })
        .when('/loan-used-car', {
            templateUrl: 'partial/loan-used-car.html',
        })
        .when('/pawn-bike-car', {
            templateUrl: 'partial/pawn-bike-car.html',
        })
        .when('/contact', {
            templateUrl: 'partial/contact.html',
            controller:'contactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

