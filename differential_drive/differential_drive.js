module.exports = function(RED) {
  function differential_drive(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    this.on('input', function(msg) {
      if (msg.topic.toLowerCase() == "turn") {
        if (msg.payload.toLowerCase() == "left") {
          var Lmotor = {
            payload: 1
          };
          var Rmotor = {
            payload: 1
          };
        } else if (msg.payload.toLowerCase() == "right") {
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
      if (msg.topic.toLowerCase() == "motion") {
        if (msg.payload.toLowerCase() == "forward") {
          var Lmotor = {
            payload: -1
          };

          var Rmotor = {
            payload: 1
          };

        } else if (msg.payload.toLowerCase() == "reverse") {
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
      if (msg.payload.toLowerCase() == "break") {
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
  RED.nodes.registerType("differential drive", differential_drive);
}
