const path = require('path')
const gulp = require('gulp')
const mocha = require('gulp-mocha')

const debug = require('debug')('SnappyLogicNodes:gulpfile')

gulp.task('mocha', function(done) {
  debug("running mocha")
  return gulp.src(['test/**/*_spec.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', function(e) {
      debug(e)
    })
    .on('end', function() {
      debug("mocha done")
      done();
      process.exit()
    })
});
