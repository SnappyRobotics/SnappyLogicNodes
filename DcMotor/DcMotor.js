<!-- The MIT License (MIT)
===
=== === === === === ===

Copyright(c) 2015 Luis Montes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    -->
    <
    script type = "text/x-red"
data - template - name = "gpio in" >
    <
    div class = "form-row" >
    <
    label
for = "node-input-board" > < i class = "fa fa-tasks" > < /i> Board</label >
    <
    input type = "text"
id = "node-input-board" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-input-state" > < i class = "fa fa-wrench" > < /i> Type</label >
    <
    select type = "text"
id = "node-input-state"
style = "width: 150px;" >
    <
    option value = "INPUT" > Digital pin < /option> <
    option value = "ANALOG" > Analogue pin < /option> <
    /select> <
    /div> <
    div class = "form-row"
id = "node-div-samplingIntervalRow" >
    <
    label
for = "node-input-samplingInterval" > < i class = "fa fa-circle" > < /i> Sampling Interval</label >
    <
    input type = "text"
id = "node-input-samplingInterval"
placeholder = "300" >
    <
    /div> <
    div class = "form-row"
id = "node-div-pinRow" >
    <
    label
for = "node-input-pin" > < i class = "fa fa-circle" > < /i> Pin</label >
    <
    input type = "text"
id = "node-input-pin"
placeholder = "2" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-input-name" > < i class = "fa fa-tag" > < /i> Name</label >
    <
    input type = "text"
id = "node-input-name"
placeholder = "Name" >
    <
    /div> <
    div class = "form-tips"
id = "node-div-formTipRow" > < b > Note: < /b> You cannot use the same pin for both output and input.</div >
    <
    /div> <
    /script>

    <
    script type = "text/x-red"
data - help - name = "gpio in" >
    <
    p > gpio input node.A node
for receiving data from General Purpose Input and Outputs(GPIOs) pins though the use of johnny - five I / O Plugins < /p> <
    /script>

    <
    script type = "text/x-red"
data - template - name = "gpio out" >
    <
    div class = "form-row" >
    <
    label
for = "node-input-board" > < i class = "fa fa-tasks" > < /i> Board</label >
    <
    input type = "text"
id = "node-input-board" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-input-state" > < i class = "fa fa-wrench" > < /i> Type</label >
    <
    select type = "text"
id = "node-input-state"
style = "width: 200px;" >
    <
    option value = "OUTPUT" > Digital(0 / 1) < /option> <
    option value = "PWM" > Analogue(0 - 255) < /option> <
    option value = "SERVO" > Servo(0 - 180) < /option> <
    option value = "I2C_READ_REQUEST" > I2C Read Request < /option> <
    option value = "I2C_WRITE_REQUEST" > I2C Write Request < /option> <
    option value = "I2C_DELAY" > I2C Delay < /option> <
    /select> <
    /div> <
    div class = "form-row"
id = "node-div-pinRow" >
    <
    label
for = "node-input-pin" > < i class = "fa fa-circle" > < /i> Pin</label >
    <
    input type = "text"
id = "node-input-pin"
placeholder = "13" >
    <
    /div> <
    div class = "form-row"
id = "node-div-i2cAddressRow" >
    <
    label
for = "node-input-i2cAddress" > < i class = "fa fa-circle" > < /i> I2C Address</label >
    <
    input type = "text"
id = "node-input-i2cAddress"
placeholder = "13" >
    <
    /div> <
    div class = "form-row"
id = "node-div-i2cRegisterRow" >
    <
    label
for = "node-input-i2cRegister" > < i class = "fa fa-circle" > < /i> Register (optional)</label >
    <
    input type = "text"
id = "node-input-i2cRegister" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-input-name" > < i class = "fa fa-tag" > < /i> Name</label >
    <
    input type = "text"
id = "node-input-name"
placeholder = "Name" >
    <
    /div> <
    div class = "form-tips"
id = "node-div-formTipRow" > < b > Note: < /b> You cannot use the same pin for both output and input.</div >
    <
    /script>

    <
    script type = "text/x-red"
data - help - name = "gpio out" >
    <
    p > gpio output node.A node
for sending data to General Purpose Input and Outputs(GPIOs) pins though the use of johnny - five I / O Plugins < /p> <
    /script>

    <
    script type = "text/x-red"
data - template - name = "nodebot" >
    <
    div class = "form-row" >
    <
    label
for = "node-config-input-boardType" > < i class = "fa fa-gears" > < /i> Nodebot</label >
    <
    select type = "text"
id = "node-config-input-boardType"
style = "width: 200px;" >
    <
    option value = "firmata" > Arduino / Firmata < /option> <
    option value = "raspi-io" > Raspberry Pi < /option> <
    option value = "beaglebone-io" > BeagleBone Black < /option> <
    option value = "galileo-io" > Galileo / Edison < /option> <
    option value = "blend-micro-io" > Blend Micro < /option> <
    option value = "bean-io" > LightBlue Bean < /option> <
    option value = "imp-io" > Electirc Imp < /option> <
    option value = "particle-io" > Particle(Spark) Core / Photon < /option> <
    option value = "tinker-io" > Particle / Tinker < /option> <
    option value = "chip-io" > C.H.I.P. < /option> <
    /select> <
    /div> <
    div class = "form-row"
id = "node-div-firmataRow" >
    <
    div class = "form-row"
id = "node-div-connectionTypeRow" >
    <
    label
for = "node-config-input-connectionType" > < i class = "fa fa-wrench" > < /i> Connection</label >
    <
    select type = "text"
id = "node-config-input-connectionType"
style = "width: 200px;" >
    <
    option value = "local" > Local Serial Port < /option> <
    option value = "tcp" > TCP Connect to < /option> <
    option value = "tcplisten" > TCP Listen on < /option> <
    option value = "udp" > UDP broadcast < /option> <
    option value = "socketio" > socket.io < /option> <
    option value = "mqtt" > MQTT < /option> <
    option value = "meshblu" > Meshblu(skynet) < /option> <
    /select> <
    /div> <
    div class = "form-row"
id = "node-div-serialRow" >
    <
    label
for = "node-config-input-serialportName" > < i class = "fa fa-random" > < /i> Port</label >
    <
    input type = "text"
id = "node-config-input-serialportName"
style = "width:60%;"
placeholder = "e.g. /dev/ttyUSB0  COM1" / >
    <
    a id = "node-config-lookup-serial"
class = "btn" > < i id = "node-config-lookup-serial-icon"
class = "fa fa-search" > < /i></a >
    <
    /div> <
    div class = "form-row"
id = "node-div-tcpHostRow" >
    <
    label
for = "node-config-input-tcpHost" > < i class = "fa fa-globe" > < /i> TCP Host</label >
    <
    input type = "text"
id = "node-config-input-tcpHost" >
    <
    /div> <
    div class = "form-row"
id = "node-div-tcpPortRow" >
    <
    label
for = "node-config-input-tcpPort" > < i class = "fa fa-random" > < /i> TCP port</label >
    <
    input type = "text"
id = "node-config-input-tcpPort" >
    <
    /div> <
    div class = "form-row"
id = "node-div-mqttRow" >
    <
    label
for = "node-config-input-mqttServer" > < i class = "fa fa-globe" > < /i>MQTT Server</label >
    <
    input type = "text"
id = "node-config-input-mqttServer"
placeholder = "mqtt://my_mqtt_server:1883" >
    <
    /div> <
    div class = "form-row"
id = "node-div-socketServerRow" >
    <
    label
for = "node-config-input-socketServer" > < i class = "fa fa-globe" > < /i>Websocket Server</label >
    <
    input type = "text"
id = "node-config-input-socketServer"
placeholder = "wss://my_socket_server" >
    <
    /div> <
    div class = "form-row"
id = "node-div-meshbluServerRow" >
    <
    label
for = "node-config-input-meshbluServer" > < i class = "fa fa-globe" > < /i>Meshblu Server</label >
    <
    input type = "text"
id = "node-config-input-meshbluServer"
placeholder = "https://meshblu.octoblu.com" >
    <
    /div> <
    div class = "form-row"
id = "node-div-uuidRow" >
    <
    label
for = "node-config-input-uuid" > < i class = "fa fa-globe" > < /i>UUID</label >
    <
    input type = "text"
id = "node-config-input-uuid"
placeholder = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" >
    <
    /div> <
    div class = "form-row"
id = "node-div-tokenRow" >
    <
    label
for = "node-config-input-token" > < i class = "fa fa-globe" > < /i>token</label >
    <
    input type = "text"
id = "node-config-input-token" >
    <
    /div> <
    div class = "form-row"
id = "node-div-usernameRow" >
    <
    label
for = "node-config-input-username" > < i class = "fa fa-user" > < /i> username</label >
    <
    input type = "text"
id = "node-config-input-username" >
    <
    /div> <
    div class = "form-row"
id = "node-div-passwordRow" >
    <
    label
for = "node-config-input-password" > < i class = "fa fa-lock" > < /i> password</label >
    <
    input type = "text"
id = "node-config-input-password" >
    <
    /div> <
    div class = "form-row"
id = "node-div-sendUuidRow" >
    <
    label
for = "node-config-input-sendUuid" > < i class = "fa fa-globe" > < /i>send UUID</label >
    <
    input type = "text"
id = "node-config-input-sendUuid"
placeholder = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" >
    <
    /div> <
    div class = "form-row"
id = "node-div-pubRow" >
    <
    label
for = "node-config-input-pubTopic" > < i class = "fa fa-tag" > < /i>Publish Topic</label >
    <
    input type = "text"
id = "node-config-input-pubTopic"
placeholder = "pubTopic" >
    <
    /div> <
    div class = "form-row"
id = "node-div-subRow" >
    <
    label
for = "node-config-input-subTopic" > < i class = "fa fa-tag" > < /i>Subscribe Topic</label >
    <
    input type = "text"
id = "node-config-input-subTopic"
placeholder = "subTopic" >
    <
    /div> <
    /div> <
    div class = "form-row"
id = "node-div-sparkRow" >
    <
    div class = "form-row" >
    <
    label
for = "node-config-input-sparkId" > < i class = "fa fa-user" > < /i> Device Id</label >
    <
    input type = "text"
id = "node-config-input-sparkId" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-config-input-sparkToken" > < i class = "fa fa-lock" > < /i> Token</label >
    <
    input type = "text"
id = "node-config-input-sparkToken" >
    <
    /div> <
    /div> <
    div class = "form-row"
id = "node-div-impRow" >
    <
    div class = "form-row" >
    <
    label
for = "node-config-input-impId" > < i class = "fa fa-user" > < /i> Agent Id</label >
    <
    input type = "text"
id = "node-config-input-impId" >
    <
    /div> <
    /div> <
    div class = "form-row"
id = "node-div-beanRow" >
    <
    div class = "form-row" >
    <
    label
for = "node-config-input-beanId" > < i class = "fa fa-user" > < /i> UUID (optional)</label >
    <
    input type = "text"
id = "node-config-input-beanId" >
    <
    /div> <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-config-input-name" > < i class = "fa fa-tag" > < /i> Name</label >
    <
    input type = "text"
id = "node-config-input-name"
placeholder = "Name" >
    <
    /div> <
    /script>





    <
    script type = "text/x-red"
data - template - name = "johnny5" >
    <
    div class = "form-row" >
    <
    label
for = "node-input-board" > < i class = "fa fa-tasks" > < /i> Board</label >
    <
    input type = "text"
id = "node-input-board" >
    <
    /div> <
    div class = "form-row" >
    <
    label
for = "node-input-name" > < i class = "fa fa-tag" > < /i> <span>name</span > < /label> <
    input type = "text"
id = "node-input-name" >
    <
    /div> <
    div class = "form-row"
style = "margin-bottom: 0px;" >
    <
    label
for = "node-input-func" > < i class = "fa fa-wrench" > < /i> <span>onReady</span > < /label> <
    input type = "hidden"
id = "node-input-func"
autofocus = "autofocus" >
    <
    input type = "hidden"
id = "node-input-noerr" >
    <
    /div> <
    div class = "form-row node-text-editor-row" >
    <
    div style = "height: 250px;"
class = "node-text-editor"
id = "node-input-func-editor" > < /div> <
    /div> <
    div class = "form-tips" > < span > See the Info tab
for help writing johnny - five functions. < /span></div >
    <
    /script>

    <
    script type = "text/x-red"
data - help - name = "johnny5" >
    <
    p > A
function block where you can write code using the amazing < a target = "_new"
href = "http://johnny-five.io" > johnny - five < /a> robotics library.</p >
    <
    p > The
function you write is what happens once the specified johnny - five board emits a 'ready'
event. < /p> <
    p > Your script executes < strong > ONCE < /strong> on deployment, <strong>NOT</strong > each time a message comes. < /p>

    <
    strong > Using johnny - five components < /strong> <
    p > The "board"
and "five"
variables are avaiable
for use when creating johnny - five component instances such as:
    <
    p > < code >
    var led = new five.Led({
        pin: 13,
        board: board
    }); < /code></p >
<
/p>

<
strong > Handling inputs and outputs < /strong> <
    p > You handle input and output messages to the node in your code with:
    <
    p > < code > node.on("input", function(msg) { ...
    }) < /code> and <code>node.send({topic: "myTopic", payload: "myPayload"})</code > < /p> <
    /p>

    <
    strong > Using other modules < /strong> <
    p > You have node require available to your scritps to do things such as:
        <
        p > < code >
        var _ = require("lodash"); < /code></p >
    <
    /p>


    <
    /script>

    <
    script type = "text/javascript" >


    RED.nodes.registerType('gpio in', {
        category: 'input',
        defaults: {
            name: {
                value: ""
            },
            state: {
                value: "INPUT",
                required: true
            },
            samplingInterval: {
                value: "300",
                required: false
            },
            pin: {
                value: "",
                required: false
            },
            board: {
                type: "nodebot",
                required: true
            }
        },
        color: "#f6de1d",
        inputs: 0,
        outputs: 1,
        icon: "gpiowhite.png",
        label: function() {
            return this.name || "gpio" + this.pin;
        },
        oneditprepare: function() {

            var self = this;

            function showInterval() {
                $("#node-div-samplingIntervalRow").show();
            }

            function hideInterval() {
                $("#node-div-samplingIntervalRow").hide();
            }

            if (self.state === 'ANALOG') {
                showInterval();
            } else {
                hideInterval();
            }

            var intervalInput = $("#node-input-state");
            intervalInput.change(function() {
                console.log('intervalInput changed', this.value);
                if (this.value === 'ANALOG') {
                    showInterval();
                } else {
                    hideInterval();
                }
            });

        }
    });


RED.nodes.registerType('gpio out', {
    category: 'output',
    defaults: {
        name: {
            value: ""
        },
        state: {
            value: "OUTPUT",
            required: true
        },
        pin: {
            value: "",
            required: false
        },
        i2cDelay: {
            value: "0",
            required: false
        },
        i2cAddress: {
            value: "",
            required: false
        },
        i2cRegister: {
            value: "",
            required: false
        },
        outputs: {
            value: 0
        },
        board: {
            type: "nodebot",
            required: true
        }
    },
    color: "#f6de1d",
    inputs: 1,
    outputs: 0,
    icon: "gpiowhite.png",
    align: "right",
    label: function() {
        console.log('name', "gpio" + (this.pin || this.i2cAddress || ''));
        return this.name || "gpio" + (this.pin || this.i2cAddress || '');
    },
    oneditprepare: function() {

        var self = this;

        function showI2C() {
            $("#node-div-i2cAddressRow").show();
            $("#node-div-i2cRegisterRow").show();
            $("#node-div-i2cDelayRow").show();
            $("#node-div-pinRow").hide();
            $("#node-div-formTipRow").hide();
        }

        function hideI2C() {
            $("#node-div-i2cAddressRow").hide();
            $("#node-div-i2cRegisterRow").hide();
            $("#node-div-i2cDelayRow").hide();
            $("#node-div-pinRow").show();
            $("#node-div-formTipRow").show();
        }

        if (self.state === 'I2C_READ_REQUEST' || self.state === 'I2C_WRITE_REQUEST' || self.state === 'I2C_DELAY') {
            showI2C();
        } else {
            hideI2C();
        }

        var stateInput = $("#node-input-state");
        stateInput.change(function() {
            console.log('stateInput changed', this.value);
            if (this.value === 'I2C_READ_REQUEST' || this.value === 'I2C_WRITE_REQUEST' || this.value === 'I2C_DELAY') {
                showI2C();
            } else {
                hideI2C();
            }
        });

    },
    oneditsave: function(a) {
        var stateInput = $("#node-input-state");
        if (stateInput.val() === 'I2C_READ_REQUEST') {
            this.outputs = 1;
        } else {
            this.outputs = 0;
        }
        console.log('saving', this, a, stateInput.val());
    }
});



RED.nodes.registerType('nodebot', {
    category: 'config',
    defaults: {
        name: {
            value: "",
            required: false
        },
        username: {
            value: "",
            required: false
        },
        password: {
            value: "",
            required: false
        },
        boardType: {
            value: "firmata",
            required: true
        },
        serialportName: {
            value: "",
            required: false
        },
        connectionType: {
            value: "local",
            required: false
        },
        mqttServer: {
            value: "",
            required: false
        },
        socketServer: {
            value: "",
            required: false
        },
        pubTopic: {
            value: "",
            required: false
        },
        subTopic: {
            value: "",
            required: false
        },
        tcpHost: {
            value: "",
            required: false
        },
        tcpPort: {
            value: "",
            required: false
        },
        sparkId: {
            value: "",
            required: false
        },
        sparkToken: {
            value: "",
            required: false
        },
        beanId: {
            value: "",
            required: false
        },
        impId: {
            value: "",
            required: false
        },
        meshbluServer: {
            value: "https://meshblu.octoblu.com",
            required: false
        },
        uuid: {
            value: "",
            required: false
        },
        token: {
            value: "",
            required: false
        },
        sendUuid: {
            value: "",
            required: false
        }
    },
    label: function() {
        return this.name || this.boardType;
    },
    oneditprepare: function(a) {
        var self = this;

        console.log('startup', self);

        var boardRows = ['firmata', 'bean', 'spark', 'imp'];
        var boardToggles = {
            firmata: 'firmata',
            "bean-io": 'bean',
            "particle-io": 'spark',
            "tinker-io": 'spark',
            "imp-io": 'imp'
        };

        function toggleBoardRows(type) {
            var boardType = boardToggles[type] || 'other';
            boardRows.forEach(function(row) {
                $("#node-div-" + row + "Row").hide();
                if (boardType === row) {
                    $("#node-div-" + row + "Row").show();
                }
            });
        }

        var firmataRows = ['serial', 'mqtt', 'socketServer', 'username', 'password', 'pub', 'sub', 'tcpHost', 'tcpPort', 'meshbluServer', 'uuid', 'token', 'sendUuid'];
        var firmataToggles = {
            local: ['serial'],
            mqtt: ['mqtt', 'username', 'password', 'pub', 'sub'],
            meshblu: ['meshbluServer', 'uuid', 'token', 'sendUuid'],
            socketio: ['socketServer', 'pub', 'sub'],
            tcp: ['tcpHost', 'tcpPort'],
            tcplisten: ['tcpPort'],
            udp: ['tcpHost', 'tcpPort']
        };

        function toggleFirmataOptions(type) {
            var firmOpts = firmataToggles[type] || [];
            firmataRows.forEach(function(row) {
                $("#node-div-" + row + "Row").hide();
                firmOpts.forEach(function(firmOpt) {
                    if (firmOpt === row) {
                        $("#node-div-" + row + "Row").show();
                    }
                });

            });
        }

        toggleBoardRows(self.boardType);

        try {
            toggleFirmataOptions(self.connectionType);
        } catch (exp) {}

        var boardTypeInput = $("#node-config-input-boardType");
        boardTypeInput.change(function() {
            // console.log('boardTypeInput changed', this.value);
            toggleBoardRows(this.value);
        });

        var connectionTypeInput = $("#node-config-input-connectionType");
        connectionTypeInput.change(function() {
            // console.log('connectionTypeInput changed', this.value);
            try {
                toggleFirmataOptions(this.value);
            } catch (exp) {}
        });


        try {
            $("#node-config-input-serialportName").autocomplete("destroy");
        } catch (err) {}
        $("#node-config-lookup-serial").click(function() {
            $("#node-config-lookup-serial-icon").removeClass('fa-search');
            $("#node-config-lookup-serial-icon").addClass('spinner');
            $("#node-config-lookup-serial").addClass('disabled');

            $.getJSON('gpioserialports', function(data) {
                $("#node-config-lookup-serial-icon").addClass('fa-search');
                $("#node-config-lookup-serial-icon").removeClass('spinner');
                $("#node-config-lookup-serial").removeClass('disabled');
                var ports = [];
                $.each(data, function(i, port) {
                    ports.push(port);
                });
                $("#node-config-input-serialportName").autocomplete({
                    source: ports,
                    minLength: 0,
                    close: function(event, ui) {
                        $("#node-config-input-serialportName").autocomplete("destroy");
                    }
                }).autocomplete("search", "");
            });
        });

        console.log('prepped', self);

    },
    oneditsave: function(a) {
        console.log('saving', this, a);
    }
});


RED.nodes.registerType('johnny5', {
    color: "#f6de1d",
    category: 'function',
    defaults: {
        name: {
            value: ""
        },
        func: {
            value: ""
        },
        board: {
            type: "nodebot",
            required: true
        },
        noerr: {
            value: 0,
            required: true,
            validate: function(v) {
                return ((!v) || (v === 0)) ? true : false;
            }
        }
    },
    inputs: 1,
    outputs: 1,
    icon: "johnny5white.png",
    label: function() {
        return this.name || 'johnny5';
    },
    oneditprepare: function() {
        var that = this;
        $("#node-input-outputs").spinner({
            min: 1
        });

        function functionDialogResize() {
            var rows = $("#dialog-form>div:not(.node-text-editor-row)");
            var height = $("#dialog-form").height();
            for (var i = 0; i < rows.size(); i++) {
                height -= $(rows[i]).outerHeight(true);
            }
            var editorRow = $("#dialog-form>div.node-text-editor-row");
            height -= (parseInt(editorRow.css("marginTop"), 10) + parseInt(editorRow.css("marginBottom"), 10));
            $(".node-text-editor").css("height", height + "px");
            that.editor.resize();
        }
        $("#dialog").on("dialogresize", functionDialogResize);
        $("#dialog").one("dialogopen", function(ev) {
            var size = $("#dialog").dialog('option', 'sizeCache-function');
            if (size) {
                $("#dialog").dialog('option', 'width', size.width);
                $("#dialog").dialog('option', 'height', size.height);
                functionDialogResize();
            }
        });
        $("#dialog").one("dialogclose", function(ev, ui) {
            var height = $("#dialog").dialog('option', 'height');
            $("#dialog").off("dialogresize", functionDialogResize);
        });

        this.editor = RED.editor.createEditor({
            id: 'node-input-func-editor',
            mode: 'ace/mode/javascript',
            value: $("#node-input-func").val()
        });

        this.editor.focus();
    },
    oneditsave: function() {
        var annot = this.editor.getSession().getAnnotations();
        this.noerr = 0;
        $("#node-input-noerr").val(0);
        for (var k = 0; k < annot.length; k++) {
            //console.log(annot[k].type,":",annot[k].text, "on line", annot[k].row);
            if (annot[k].type === "error") {
                $("#node-input-noerr").val(annot.length);
                this.noerr = annot.length;
            }
        }
        $("#node-input-func").val(this.editor.getValue());
        delete this.editor;
    }
});


<
/script>
