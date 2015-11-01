'use strict';

describe('Service: spotifyService', function () {

  // load the service's module
  beforeEach(module('spootApp'));

  // instantiate service
  var spotifyService;
  beforeEach(inject(function (_spotifyService_) {
    spotifyService = _spotifyService_;
  }));

  it('should do something', function () {
    expect(!!spotifyService).toBe(true);
  });

});
