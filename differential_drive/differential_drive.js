module.exports = function(RED) {
    function differential_drive(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {

            // msg.payload = msg.payload.toLowerCase();
            if (msg.topic == "turn") {
                if (msg.payload == "left") {
                    var Lmotor = {
                        payload: "anticlockwise"
                    };
                    var Rmotor = {
                        payload: "anticlockwise"
                    };

                } else if (msg.payload == "right") {
                    var Lmotor = {
                        payload: "clockwise"
                    };
                    var Rmotor = {
                        payload: "clockwise"
                    };

                }
                this.send([Lmotor, Rmotor, null]);
            }


            if (msg.topic == "motion") {
                if (msg.payload == "forward") {
                    var Lmotor = {
                        payload: "anticlockwise"
                    };
                    var Rmotor = {
                        payload: "clockwise"
                    };

                } else if (msg.payload == "revers") {
                    var Lmotor = {
                        payload: "clockwise"
                    };
                    var Rmotor = {
                        payload: "anticlockwise"
                    };

                }
                this.send([Lmotor, Rmotor, null]);
            }

            if (msg.topic == "speed") {

                this.send([null, null, msg]);
            }

        });

    }
    RED.nodes.registerType("differential_drive", differential_drive);
}
