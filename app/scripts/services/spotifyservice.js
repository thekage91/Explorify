'use strict';

/**
 * @ngdoc service
 * @name spootApp.spotifyService
 * @description
 * # spotifyService
 * Service in the spootApp.
 */
 angular.module('spootApp')
 .service('spotifyService', ['$log', 'Spotify', function ($log, Spotify) {

 	var obj = {};

 	obj.sayHello = function(){

 		$log.info("Hello from spotifyService");
 	};

 	obj.debugSpotify = function(){

 		$log.debug(Spotify);
 	};

 	obj.sampleTrackSpotifyUrl = function(id){

 		var promise = Spotify.getTrack(id).then(function (data) {
 			return data["external_urls"].spotify;
 		});

 		return promise;
 	}

 	obj.getAuthorization = function(){

 		Spotify.login();
 	}

 	obj.getAllTracks = function(){

		Spotify.getSavedUserTracks().then(function (data) {
		  console.log(data);
		});
 	};

 	obj.getAllTitleTracks = function(){

 	};

 	obj.getAllArtist2Tracks = function(){

 	};

 	return obj;

}]);
