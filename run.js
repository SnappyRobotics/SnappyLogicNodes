var spawn = require('child_process').spawn;
const path = require('path');
const debug = require('debug')('SnappyLogicNodes:run');

const red = require('nodered_container');

red.check(__dirname, function (err) {
  if (err) {
    throw err
  }
  var red = require(path.join(__dirname, "..", "node-red", 'red.js'))
  debug(red)
  /*var ls = spawn(red'node-red')

  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  ls.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });*/

})
