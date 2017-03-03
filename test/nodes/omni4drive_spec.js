var should = require("should");
var helper = require('../helper.js');
var differential_drive = require("../../nodes/omni_drive/omni_4drive.js");

describe('testing omni 4drive', function() {

  before(function(done) {
    helper.startServer(done);
  });

  afterEach(function() {
    helper.unload();
  });

  it('should be loaded', function(done) {
    var flow = [{
      id: "n1",
      type: "differential drive",
      name: "function"
    }];
    helper.load(differential_drive, flow, function() {
      var n1 = helper.getNode("n1");
      done();
    });
  });
});
