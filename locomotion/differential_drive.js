'use strict';

const debug = require('debug')('snappy:logic:differential_drive');

module.exports = function(RED) {
  var diffNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var outputs = []

    outputs.push({ //RIGHT
      payload: {
        speed: 0,
        brake: true
      }
    })

    outputs.push({ //LEFT
      payload: {
        speed: 0,
        brake: true
      }
    })

    var processInput = function(msg) {
      var x = msg.payload.linear.x * config.gain
      var z = msg.payload.angular.z * config.gain

      debug('x, z :', x, z)
      var right_speed_out = x + (z * config.wheel_distance / 2)
      var left_speed_out = x - (z * config.wheel_distance / 2)

      debug('speed out:', right_speed_out, left_speed_out)

      if (x == 0 && z == 0) {
        outputs[0].payload.speed = 0
        outputs[1].payload.speed = 0
        outputs[0].payload.brake = true
        outputs[1].payload.brake = true
      } else {
        outputs[0].payload.speed = right_speed_out
        outputs[1].payload.speed = left_speed_out
        outputs[0].payload.brake = false
        outputs[1].payload.brake = false
      }

      debug('outputs:', outputs)

      node.send(outputs)
    }

    this.on('input', function(msg) {
      if (msg.payload &&
        msg.payload.linear &&
        msg.payload.linear.x !== undefined &&
        msg.payload.angular &&
        msg.payload.angular.z !== undefined) {

        processInput(msg)
      } else {
        node.status({
          fill: "red",
          shape: "dot",
          text: "wrong input"
        })
        setTimeout(function() {
          node.status({})
        }, 3000)
      }
    })
  }
  RED.nodes.registerType("differential-drive", diffNode);
}
