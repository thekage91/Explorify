'use strict';

/**
 * @ngdoc function
 * @name spootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spootApp
 */
angular.module('spootApp')
  .controller('MainCtrl', [ '$log', 'spotifyService', function ($log, spotifyService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    spotifyService.sampleTrackSpotifyUrl('6rqhFgbbKwnb9MLmUQDhG6').then(function(uri){

    	$log.info(uri);
    });
}]);
