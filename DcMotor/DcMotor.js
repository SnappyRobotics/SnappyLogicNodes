var serialport = require('serialport');
var createNodebotNode = require('./lib/nodebotNode');

var five = require('johnny-five');
var vm = require('vm');
var util = require('util');
var _ = require('lodash');

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

    createNodebotNode(RED);

    function gpioOutNode(n) {
        RED.nodes.createNode(this, n);
        this.buttonState = -1;
        this.pin = n.pin;
        this.state = n.state;
        this.arduino = n.arduino;
        this.nodebot = RED.nodes.getNode(n.board);
        this.i2cAddress = parseInt(n.i2cAddress, 10);
        this.i2cRegister = parseInt(n.i2cRegister, 10);
        if (typeof this.nodebot === "object") {
            var node = this;
            connectingStatus(node);

            node.nodebot.on('ioready', function() {

                connectedStatus(node);

                node.on('input', function(msg) {
                    try {
                        var state = msg.state || node.state;
                        var io = node.nodebot.io;
                        if (state === 'OUTPUT') {
                            try {
                                io.pinMode(node.pin, io.MODES[state]);
                            } catch (exp) {
                                console.log(exp);
                            }
                            if ((msg.payload == true) || (msg.payload == 1) || (msg.payload.toString().toLowerCase() === "on")) {
                                io.digitalWrite(node.pin, 1);
                            }
                            if ((msg.payload == false) || (msg.payload == 0) || (msg.payload.toString().toLowerCase() === "off")) {
                                io.digitalWrite(node.pin, 0);
                            }
                        } else if (state === 'PWM') {
                            try {
                                io.pinMode(node.pin, io.MODES[state]);
                            } catch (exp) {
                                console.log(exp);
                            }
                            msg.payload = msg.payload * 1;
                            if ((msg.payload >= 0) && (msg.payload <= 255)) {
                                //console.log(msg.payload, node.pin);
                                io.analogWrite(node.pin, msg.payload);
                            }
                        } else if (state === 'SERVO') {
                            try {
                                io.pinMode(node.pin, io.MODES[state]);
                            } catch (exp) {
                                console.log(exp);
                            }
                            msg.payload = msg.payload * 1;
                            if ((msg.payload >= 0) && (msg.payload <= 180)) {
                                //console.log(msg.payload, node.pin);
                                io.servoWrite(node.pin, msg.payload);
                            }
                        } else if (node.state === 'I2C_READ_REQUEST') {
                            var register = parseInt(msg.i2cRegister, 10) || parseInt(node.i2cRegister, 10);
                            var i2cAddress = parseInt(msg.i2cAddress, 10) || parseInt(node.i2cAddress, 10);
                            var numBytes = parseInt(msg.payload, 10);
                            if (io.i2cReadOnce && i2cAddress && numBytes) {
                                if (register) {
                                    io.i2cReadOnce(i2cAddress, register, numBytes, function(data) {
                                        node.send({
                                            payload: data,
                                            register: register,
                                            i2cAddress: i2cAddress,
                                            numBytes: numBytes
                                        });
                                    });
                                } else {
                                    io.i2cReadOnce(i2cAddress, numBytes, function(data) {
                                        node.send({
                                            payload: data,
                                            i2cAddress: i2cAddress,
                                            numBytes: numBytes
                                        });
                                    });
                                }
                            }
                        } else if (node.state === 'I2C_WRITE_REQUEST') {
                            var register = parseInt(msg.i2cRegister, 10) || parseInt(node.i2cRegister, 10);
                            var i2cAddress = parseInt(msg.i2cAddress, 10) || parseInt(node.i2cAddress, 10);
                            if (io.i2cWrite && i2cAddress && msg.payload) {
                                if (register) {
                                    io.i2cWrite(i2cAddress, register, msg.payload);
                                } else {
                                    io.i2cWrite(i2cAddress, msg.payload);
                                }
                            }
                        } else if (node.state === 'I2C_DELAY') {
                            if (io.i2cConfig) {
                                if (register) {
                                    io.i2cConfig(parseInt(msg.payload, 10));
                                }
                            }
                        }
                    } catch (inputExp) {
                        node.warn(inputExp);
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

    RED.nodes.registerType("Dc Motor", dcmotorOutNode);

    function handleRoute(req, res, handler) {
        handler(req.query)
            .then(function(data) {
                res.send(data);
            }, function(err) {
                console.log('error in gpio request', err);
                res.send(500);
            });
    }

    function listArduinoPorts(callback) {
        return serialport.list(function(err, ports) {
            if (err) {
                return callback(err);
            }
            var devices = [];
            for (var i = 0; i < ports.length; i++) {
                if (/usb|acm|com\d+/i.test(ports[i].comName)) {
                    devices.push(ports[i].comName);
                }
            }
            return callback(null, devices);
        });
    }
    RED.httpAdmin.get("/gpioserialports", RED.auth.needsPermission("arduino.read"), function(req, res) {
        listArduinoPorts(function(err, ports) {
            res.json(ports);
        });
    });

}
