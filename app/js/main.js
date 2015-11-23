(function () {

'use strict';


  angular.module('EmpathyApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('EmpathyApp')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

}());
