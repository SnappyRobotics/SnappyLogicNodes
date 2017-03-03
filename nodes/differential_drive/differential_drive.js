module.exports = function(RED) {
  function differential_driveNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.motion = config.motion;
    this.turn = config.turn;
    this.on('input', function(msg) {
      // msg.payload = config.turn
      // msg.payload = config.motion
      if ((msg.topic.toLowerCase() == "turn") || (config.turn)) {
        config.turn = msg.payload.toLowerCase();
        if (config.turn.toLowerCase() == "left") {
          var Lmotor = {
            payload: 1
          };
          var Rmotor = {
            payload: 1
          };
        } else if (config.turn.toLowerCase() == "right") {
          var Lmotor = {
            payload: -1
          };

          var Rmotor = {
            payload: -1
          };
        }
        this.send([
          [Lmotor],
          [Rmotor]
        ]);
      }
      if ((msg.topic.toLowerCase() == "motion") || (config.motion)) {
        config.motion = msg.payload.toLowerCase();
        if (config.motion.toLowerCase() == "forward") {
          var Lmotor = {
            payload: -1
          };

          var Rmotor = {
            payload: 1
          };

        } else if (config.motion.toLowerCase() == "reverse") {
          var Lmotor = {
            payload: 1
          };

          var Rmotor = {
            payload: -1
          };

        }
        this.send([
          [Lmotor],
          [Rmotor]
        ]);
      }

      if (msg.payload.toLowerCase() == "break" || (config.motion.toLowerCase() == "break") || (config.turn.toLowerCase() == "break")) {
        var Lmotor = {
          payload: 0
        };

        var Rmotor = {
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
