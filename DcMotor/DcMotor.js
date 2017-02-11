const debug = require('debug')('SnappyLogicNodes:DcMotor');

function connectingStatus(n) {
  n.status({
    fill: "red",
    shape: "ring",
    text: "connecting ... "
  });
}

function networkReadyStatus(n) {
  n.status({
    fill: "yellow",
    shape: "ring",
    text: "connecting..."
  });
}

function networkErrorStatus(n) {
  n.status({
    fill: "red",
    shape: "dot",
    text: "disconnected"
  });
}

function ioErrorStatus(n, err) {
  n.status({
    fill: "red",
    shape: "dot",
    text: "error"
  });
  n.warn(err);
}

function connectedStatus(n) {
  n.status({
    fill: "green",
    shape: "dot",
    text: "connected !!!! "
  });
}


function init(RED) {
  function DcMotor(n) {
    RED.nodes.createNode(this, n);
    this.pinA = parseInt(n.pinA);
    this.pinB = parseInt(n.pinB);
    this.pinE = parseInt(n.pinE);
    this.speed = parseInt(n.speed);

    this.nodebot = RED.nodes.getNode(n.board);
    if (typeof this.nodebot === "object") {
      var node = this;
      connectingStatus(node);

      debug(node)
      node.nodebot.on('ioready', function() {

        connectedStatus(node);

        node.on('input', function(msg) {
          try {
            var io = node.nodebot.io;

            io.pinMode(node.pinA, io.MODES["OUTPUT"]);
            io.pinMode(node.pinB, io.MODES["OUTPUT"]);
            io.pinMode(node.pinE, io.MODES["PWM"]);

            function analog() {
              if ((node.speed >= 0) && (node.speed <= 255)) {
                io.analogWrite(node.pinE, node.speed);
              }
            }

            if ((msg.payload == 1) || (msg.payload.toString().toLowerCase() === "1")) {
              io.digitalWrite(node.pinA, 1);
              io.digitalWrite(node.pinB, 0);
              analog()
            } else if ((msg.payload == -1) || (msg.payload.toString().toLowerCase() === "-1")) {
              io.digitalWrite(node.pinA, 0);
              io.digitalWrite(node.pinB, 1);
              analog()
            } else if ((msg.payload == 0) || (msg.payload.toString().toLowerCase() === "0")) {
              io.digitalWrite(node.pinA, 1);
              io.digitalWrite(node.pinB, 1);
              io.analogWrite(node.pinE, 0);

            }
            debug(node.speed, node.pinE);


          } catch (inputExp) {
            node.error(inputExp);
          }
        });
      });
      node.nodebot.on('networkReady', function() {
        networkReadyStatus(node);
      });
      node.nodebot.on('networkError', function() {
        networkErrorStatus(node);
      });
      node.nodebot.on('ioError', function(err) {
        ioErrorStatus(node, err);
      });
    } else {
      this.warn("nodebot not configured");
    }

  }
  RED.nodes.registerType("Dc Motor", DcMotor);
}
module.exports = init;
