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
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      //https://example.com/callback#access_token=&token_type=Bearer&expires_in=3600
      // access_token = BQAlrC2BBmHzf5z-EExPI_1j64aD_LZQVQXuO2TOmFzIRbqqX_Bau4cbNP4RxriSW6S4MG5GqmiGjVu4ZSH_JGXSHynyX8DDekASIG5QkJ8xGPnmcCfBrq5rlj63KdG3e85sQtqnRqaYtC611zsj3NZACYnTeRFdRZlXYidp_Hdn7KhzR1MP6TtHXjUMOMzyAzAM1BHOFAXKAhbxAl4JkxGmpV-0xHixkvb3R6u9rwzB9rxHJNHGNzRzHKnTl0urlgHj
      SpotifyProvider.setClientId('e0d4cdb2986e4d039b3b7e6ea4ce440e');
      SpotifyProvider.setRedirectUri('http://explorify.thezyro.me/#/about');
      SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public user-library-read');
  }]);
