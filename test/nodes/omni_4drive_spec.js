var should = require("should");
var helper = require('../helper.js');
var omni_4drive = require("../../nodes/omni_4drive/omni_4drive.js");

describe('testing omni 4drive', function() {

  before(function(done) {
    helper.startServer(done);
  });

  afterEach(function() {
    helper.unload();
  });

  after(function(done) {
    helper.stopServer(done);
  });

  it('should be loaded', function(done) {
    var flow = [{
      id: "n1",
      type: "omni 4drive",
      name: "function"
    }];
    helper.load(omni_4drive, flow, function() {
      var n1 = helper.getNode("n1");
      done();
    });
  });


  it('omni 4drive with input forward, expected output is -1,1,0,0', function(done) {
    var flow = [{
        id: "n1",
        type: "omni 4drive",
        wires: [
          ["n2"],
          ["n3"],
          ["n4"],
          ["n5"]
        ]
      },
      {
        id: "n2",
        type: "helper"
      },
      {
        id: "n3",
        type: "helper"
      },
      {
        id: "n4",
        type: "helper"
      },
      {
        id: "n5",
        type: "helper"
      }
    ];
    helper.load(omni_4drive, flow, function() {
      var n1 = helper.getNode("n1");
      var n2 = helper.getNode("n2");
      var n3 = helper.getNode("n3");
      var n4 = helper.getNode("n4");
      var n5 = helper.getNode("n5");
      var c = 0;
      n2.on("input", function(msg) {
        try {
          msg.should.have.property('payload', -1);
          c++;
          if (c == 4) {
            done();
          }
        } catch (err) {
          done(err)
        }
      });
      n3.on("input", function(msg) {
        try {
          msg.should.have.property('payload', 1);
          c++;
          if (c == 4) {
            done();
          }
        } catch (err) {
          done(err)
        }
      });
      n4.on("input", function(msg) {
        try {
          msg.should.have.property('payload', 0);
          c++;
          if (c == 4) {
            done();
          }
        } catch (err) {
          done(err)
        }
      });
      n5.on("input", function(msg) {
        try {
          msg.should.have.property('payload', 0);
          c++;
          if (c == 4) {
            done();
          }
        } catch (err) {
          done(err)
        }
      });
      n1.receive({
        payload: "forward",
        topic: "motion"
      });
    });
  });
});
