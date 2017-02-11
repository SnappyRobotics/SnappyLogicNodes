var should = require("should");
var helper = require('../helper.js');
var differential_drive = require("../../DcMotor/DcMotor.js");

describe('testing Dc Motor', function() {

  before(function(done) {
    helper.startServer(done);
  });

  afterEach(function() {
    helper.unload();
  });

  it('should be loaded', function(done) {
    var flow = [{
      id: "n1",
      type: "Dc Motor",
      name: "function"
    }];
    helper.load(differential_drive, flow, function() {
      var n1 = helper.getNode("n1");
      done();
    });
  });

});
