module.exports = function(RED) {
    function differential_drive(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {
            /*
                        if (msg.topic == "turn") {
                            node.send(msg);
                        }
                        if (msg.topic == "motion") {
                            node.send(msg);
                        }
                        */
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });

    }
    RED.nodes.registerType("differential_drive", differential_drive);
}
