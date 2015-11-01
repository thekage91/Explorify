'use strict';

/**
 * @ngdoc overview
 * @name spootApp
 * @description
 * # spootApp
 *
 * Main module of the application.
 */
angular
  .module('spootApp', [
    'ngRoute', 'spotify'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
