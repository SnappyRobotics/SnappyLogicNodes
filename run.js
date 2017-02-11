var spawn = require('child_process').spawn,
  ls = spawn('node-red');
const debug = require('debug')('SnappyLogicNodes:run');

const red = require('nodered_container');

debug(red)
red.getRED(__dirname, function (r) {
  debug(r);
})
/*
ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});
*/
