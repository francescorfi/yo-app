'use strict';

/**
 * @ngdoc overview
 * @name yoAppApp
 * @description
 * # yoAppApp
 *
 * Main module of the application.
 */
angular
  .module('yoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
