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
  .config(['$routeProvider', 'SpotifyProvider', function ($routeProvider, SpotifyProvider) {
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

      SpotifyProvider.setClientId('e0d4cdb2986e4d039b3b7e6ea4ce440e');
      SpotifyProvider.setRedirectUri('https://example.com/callback');
      SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  }]);
