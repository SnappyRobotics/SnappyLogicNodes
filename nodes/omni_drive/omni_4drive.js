module.exports = function(RED) {
  function omni_4driveNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.motion = parseInt(config.motion);
    this.turn = parseInt(config.turn);
    this.on('input', function(msg) {
      if ((msg.topic.toLowerCase() == "motion") || (config.motion)) {
        if ((msg.payload.toLowerCase() == "forward") || (config.turn.toLowerCase() == "forward")) {
          var Lmotor = {
            payload: -1
          };
          var Rmotor = {
            payload: 1
          };
          var Fmotor = {
            payload: 0
          };
          var Bmotor = {
            payload: 0
          };
        } else if ((msg.payload.toLowerCase() == "reverse") || (config.turn.toLowerCase() == "reverse")) {
          var Lmotor = {
            payload: 1
          };
          var Rmotor = {
            payload: -1
          };
          var Fmotor = {
            payload: 0
          };
          var Bmotor = {
            payload: 0
          };
        } else if ((msg.payload.toLowerCase() == "left") || (config.turn.toLowerCase() == "left")) {
          var Lmotor = {
            payload: 0
          };
          var Rmotor = {
            payload: 0
          };
          var Fmotor = {
            payload: 1
          };
          var Bmotor = {
            payload: -1
          };
        } else if ((msg.payload.toLowerCase() == "right") || (config.turn.toLowerCase() == "right")) {
          var Lmotor = {
            payload: 0
          };
          var Rmotor = {
            payload: 0
          };
          var Fmotor = {
            payload: -1
          };
          var Bmotor = {
            payload: 1
          };
        }
        this.send([
          [Lmotor],
          [Rmotor],
          [Fmotor],
          [Bmotor]
        ]);
      }


      if ((msg.topic.toLowerCase() == "turn") || (config.turn)) {
        if ((msg.payload.toLowerCase() == "right") || (config.turn.toLowerCase() == "right")) {
          var Lmotor = {
            payload: -1
          };
          var Rmotor = {
            payload: -1
          };
          var Fmotor = {
            payload: -1
          };
          var Bmotor = {
            payload: -1
          };
        } else if ((msg.payload.toLowerCase() == "left") || (config.turn.toLowerCase() == "left")) {
          var Lmotor = {
            payload: 1
          };
          var Rmotor = {
            payload: 1
          };
          var Fmotor = {
            payload: 1
          };
          var Bmotor = {
            payload: 1
          };
        }
        this.send([
          [Lmotor],
          [Rmotor],
          [Fmotor],
          [Bmotor]
        ]);
      }

    });
  }
  RED.nodes.registerType("omni 4drive", omni_4driveNode);
}
