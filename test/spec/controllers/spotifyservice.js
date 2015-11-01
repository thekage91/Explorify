'use strict';

describe('Controller: SpotifyserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('spootApp'));

  var SpotifyserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpotifyserviceCtrl = $controller('SpotifyserviceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpotifyserviceCtrl.awesomeThings.length).toBe(3);
  });
});
