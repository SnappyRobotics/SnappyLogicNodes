const path = require('path')
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const istanbul = require('gulp-istanbul');

const debug = require('debug')('SnappyLogicNodes:gulpfile')


gulp.task('pre-test', function() {
  return gulp.src(['test/**/*_spec.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('mocha', ['pre-test'], function(done) {
  debug("running mocha")
  return gulp.src(['test/**/*_spec.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    .on('error', function(e) {
      debug(e)
    })
    .on('end', function() {
      debug("mocha done")
      done();
      process.exit()
    })
});
