var exec = require('child_process').exec;

exec('node-red', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
});
