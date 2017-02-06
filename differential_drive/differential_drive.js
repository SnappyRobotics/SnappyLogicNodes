module.exports = function(RED) {
    function differential_drive(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {


            if (msg.topic == "turn") {
                if (msg.payload == "left") {
                    var Lmotor = {
                        payload: -1
                    };
                    var Rmotor = {
                        payload: 1
                    };
                } else if (msg.payload == "right") {
                    var Lmotor = {
                        payload: 1
                    };

                    var Rmotor = {
                        payload: 1
                    };
                }
                this.send([
                    [Lmotor],
                    [Rmotor],
                    [null]
                ]);
            }
            if (msg.topic == "motion") {
                if (msg.payload == "forward") {
                    var Lmotor = {
                        payload: -1
                    };

                    var Rmotor = {
                        payload: 1
                    };

                } else if (msg.payload == "reverse") {
                    var Lmotor = {
                        payload: -1
                    };

                    var Rmotor = {
                        payload: -1
                    };

                }
                this.send([
                    [Lmotor],
                    [Rmotor],
                    [null]
                ]);
            }

        });

    }
    RED.nodes.registerType("differential drive", differential_drive);
}
