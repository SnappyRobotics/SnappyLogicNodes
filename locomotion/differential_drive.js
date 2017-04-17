'use strict';

module.exports = function(RED) {
  var LowerCaseNode = function(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function(msg) {
      msg.payload = msg.payload.toLowerCase();
      node.send(msg);
    });
  }
  RED.nodes.registerType("lower-case", LowerCaseNode);
}
