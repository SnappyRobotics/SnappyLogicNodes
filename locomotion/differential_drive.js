'use strict';

const debug = require('debug')('snappy:logic:differential_drive');

module.exports = function(RED) {
  var diffNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function(msg) {
      if (msg.payload &&
        msg.payload.linear &&
        msg.payload.linear.x != null &&
        msg.payload.angular &&
        msg.payload.angular.z != null) {

        node.send(msg)

      } else {
        node.status({
          fill: "red",
          shape: "dot",
          text: "wrong input"
        })
        setTimeout(function() {
          node.status({})
        }, 3000);
      }

      debug(msg)

    });
  }
  RED.nodes.registerType("differential-drive", diffNode);
}
