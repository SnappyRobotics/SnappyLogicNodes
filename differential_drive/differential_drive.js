module.exports = function(RED) {
    "use strict";

    function differential_drive(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.turn = Number(config.turn);
        node.motion = Number(config.motion);

        this.on('input', function(msg) {
            var newMsg = null;
            if (msg.hasOwnProperty('turn')) {
                node.turn = Number(msg.turn);
            }
            if (msg.hasOwnProperty('motion')) {
                node.motion = Number(msg.motion);
            } else if (msg.topic == 'turn') {
                node.turn = Number(msg.payload);
            } else(msg.topic == 'motion') {
                node.motion = Number(msg.payload);
            }
            newMsg = cal();
            node.send(newMsg);
        });

        function cal() {
            //differential drive code here
        }
        RED.nodes.registerType("differential drive", differential_drive);
    }
}
