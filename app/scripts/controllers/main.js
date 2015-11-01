'use strict';

/**
 * @ngdoc function
 * @name spootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spootApp
 */
angular.module('spootApp')
  .controller('MainCtrl', ['$scope', '$log', 'spotifyService', function ($scope, $log, spotifyService) {
    
    spotifyService.sampleTrackSpotifyUrl('6rqhFgbbKwnb9MLmUQDhG6').then(function(uri){

    	$log.info(uri);
    });

    $scope.spotifyLogin = function(){

    	spotifyService.getAuthorization();
    };

    $scope.getTracks = function(){

    	spotifyService.getAllTracks();
    }

}]);
