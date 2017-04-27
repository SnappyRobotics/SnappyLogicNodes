'use strict';

const debug = require('debug')('snappy:logic:differential_odometry');

module.exports = function(RED) {
  var diffOdomNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    var output = {
      "pose": {
        "position": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "orientation": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      "twist": {
        "linear": {
          "x": 0,
          "y": 0,
          "z": 0
        },
        "angular": {
          "x": 0,
          "y": 0,
          "z": 0
        }
      }
    }

    var o = {
      oldL: 0,
      dl: 0,
      l: 0,

      oldR: 0,
      dr: 0,
      r: 0,

      oldT: Date.now(),
      newT: Date.now(),
      dt: 0,

      x: 0,
      dx: 0,
      vx: 0,

      y: 0,
      dy: 0,
      vy: 0,

      dth: 0,
      th: 0,
      vth: 0
    }

    var checkNum = function(x) {
      if (isNaN(x) || !isFinite(x)) {
        return 0
      } else {
        return x
      }
    }

    var processInput = function(msg) {
      if (msg.topic == config.left_topic) {
        o.l = msg.payload.travel
      }

      if (msg.topic == config.right_topic) {
        o.r = msg.payload.travel
      }

      if (o.oldL != o.l || o.oldR != o.r) {
        o.newT = Date.now()

        o.dl = o.l - o.oldL
        o.dr = o.r - o.oldR
        o.dt = (o.newT - o.oldT) / 1000 //In seconds

        //http://rossum.sourceforge.net/papers/DiffSteer/
        var s_ = (o.dl + o.dr) / 2

        o.dth = (o.dl - o.dr) / (config.wheel_distance)

        o.dx = s_ * Math.cos(o.th + o.dth) //th+dth because th+=dth is to be done after this function is executed
        o.dy = s_ * Math.sin(o.th + o.dth)

        o.vx = o.dx / o.dt
        o.vy = o.dy / o.dt
        o.vth = o.dth / o.dt

        o.x += o.dx
        o.y += o.dy
        o.th += o.dth

        if (o.th > Math.PI) {
          o.th = o.th - (2 * Math.PI)
        } else if (o.th < -Math.PI) {
          o.th = o.th + (2 * Math.PI)
        }

        output.pose.position.x = checkNum(o.x)
        output.pose.position.y = checkNum(o.y)

        const quaternion = require('quaternion');
        var q = new quaternion();
        q.setFromAxisAngle([0, 0, 1], checkNum(o.th) * Math.PI / 180)

        output.pose.orientation.x = checkNum(q.x)
        output.pose.orientation.y = checkNum(q.y)
        output.pose.orientation.z = checkNum(q.z)
        output.pose.orientation.w = checkNum(q.w)

        output.twist.linear.x = checkNum(o.vx)
        output.twist.linear.y = checkNum(o.vy)
        output.twist.angular.z = checkNum(o.vth)

        node.send([{
          payload: output
        }])
        o.oldT = o.newT
      } else {
        return
      }
    }

    this.on('input', function(msg) {
      if (msg.payload && msg.payload.travel !== undefined) {

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
  RED.nodes.registerType("differential-odometry", diffOdomNode);
}
