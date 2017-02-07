var should = require("should");
var helper = require('../helper.js');
var differential_drive = require("../../differential_drive/differential_drive.js");
//var awsNode = require("../../aws/aws.js");
//var sinon = require('sinon');
var nock = helper.nock;

describe('testing differential drive', function() {

    before(function(done) {
        helper.startServer(done);
    });

    afterEach(function() {
        if (nock) {
            nock.cleanAll();
        }
        helper.unload();
    });

    it('should be loaded', function(done) {
        var flow = [{
            id: "n1",
            type: "differential drive",
            name: "function"
        }];
        helper.load(differential_drive, flow, function() {
            var n1 = helper.getNode("n1");
            done();
        });
    });

    it('should send left returned -1', function(done) {
        var flow = [{
                id: "n1",
                type: "differential drive",
                wires: [
                    ["n2"]
                ],
                func: "return msg;"
            },
            {
                id: "n2",
                type: "helper"
            }
        ];
        helper.load(differential_drive, flow, function() {
            var n1 = helper.getNode("n1");
            var n2 = helper.getNode("n2");
            n2.on("input", function(msg) {
                msg.should.have.property('payload', -1);
                done();
            });
            n1.receive({
                payload: "left",
                topic: "turn"
            });
        });
    });
    it('should send left returned -1', function(done) {
        var flow = [{
                id: "n1",
                type: "differential drive",
                wires: [
                    ["n2"]
                ],
                func: "return msg;"
            },
            {
                id: "n2",
                type: "helper"
            }
        ];
        helper.load(differential_drive, flow, function() {
            var n1 = helper.getNode("n1");
            var n2 = helper.getNode("n2");
            n2.on("input", function(msg) {
                msg.should.have.property('payload', -1);
                done();
            });
            n1.receive({
                payload: "left",
                topic: "turn"
            });
        });
    });
});
