'use strict';

module.exports = function(RED) {
  var differential_driveNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    this.on('input', function(msg) {
      var Lmotor, Rmotor;
      if (msg.topic.toLowerCase() == "turn") {
        if (msg.payload.toLowerCase() == "left") {
          Lmotor = {
            payload: 1
          };
          Rmotor = {
            payload: 1
          };
        } else if (msg.payload.toLowerCase() == "right") {
          Lmotor = {
            payload: -1
          };

          Rmotor = {
            payload: -1
          };
        }
        this.send([
          [Lmotor],
          [Rmotor]
        ]);
      }
      if (msg.topic.toLowerCase() == "motion") {
        if (msg.payload.toLowerCase() == "forward") {
          Lmotor = {
            payload: -1
          };

          Rmotor = {
            payload: 1
          };

        } else if (msg.payload.toLowerCase() == "reverse") {
          Lmotor = {
            payload: 1
          };

          Rmotor = {
            payload: -1
          };

        }
        this.send([
          [Lmotor],
          [Rmotor]
        ]);
      }
      if (msg.payload.toLowerCase() == "break") {
        Lmotor = {
          payload: 0
        };

        Rmotor = {
          payload: 0
        };
        this.send([
          [Lmotor],
          [Rmotor]
        ]);
      }
    });
  }
  RED.nodes.registerType("differential drive", differential_driveNode);
}
