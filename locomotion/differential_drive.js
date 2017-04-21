'use strict';

const debug = require('debug')('snappy:logic:differential_drive');

module.exports = function(RED) {
  var diffNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var outputs = []

    // -255 to 255 divided by smoothness
    var step = (255 * 2 / config.smoothness || 10);

    var cur_right = 0;
    var cur_left = 0;

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

    var constrain = function(num) {
      if (num < -255) {
        return -255;
      } else if (num > 255) {
        return 255;
      } else {
        return num;
      }
    }

    var processInput = function(msg) {
      var x = msg.payload.linear.x * config.gain
      var z = msg.payload.angular.z * config.gain

      // debug('x, z :', x, z)
      var right_speed_out = constrain(x + (z * config.wheel_distance / 2))
      var left_speed_out = constrain(x - (z * config.wheel_distance / 2))

      var updateSpeed = function() {
        if (right_speed_out != cur_right || left_speed_out != cur_left) {
          if (Math.abs(right_speed_out - cur_right) > step) {
            if (right_speed_out > cur_right) {
              cur_right += step
            } else if (right_speed_out < cur_right) {
              cur_right -= step
            }
          } else {
            cur_right = right_speed_out
          }

          if (Math.abs(left_speed_out - cur_left) > step) {
            if (left_speed_out > cur_left) {
              cur_left += step
            } else if (left_speed_out < cur_left) {
              cur_left -= step
            }

          } else {
            cur_left = left_speed_out
          }

          outputs[0].payload.speed = cur_right
          outputs[1].payload.speed = cur_left

          // debug('speed out:', cur_right, cur_left)

          node.send(outputs)
          setTimeout(function() {
            updateSpeed()
          }, 10);
        }
      }

      if (x === 0 && z === 0) {
        right_speed_out = 0
        left_speed_out = 0
        outputs[0].payload.brake = true
        outputs[1].payload.brake = true
      } else {
        outputs[0].payload.brake = false
        outputs[1].payload.brake = false
      }
      if (right_speed_out != cur_right || left_speed_out != cur_left) {
        updateSpeed()
      }
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
