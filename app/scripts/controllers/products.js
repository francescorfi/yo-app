'use strict';

/**
 * @ngdoc function
 * @name yoAppApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the yoAppApp
 */
angular.module('yoAppApp')
  .controller('ProductsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var obj = {content:null};
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&lang=es').success(function(data, status, headers, config) {
	    $scope.weather = data.weather[0].description;
  	});
  });
