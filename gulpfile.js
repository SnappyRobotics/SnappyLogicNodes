const path = require('path')
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const istanbul = require('gulp-istanbul')
const coveralls = require('gulp-coveralls')

const debug = require('debug')('snappy:logic:gulpfile')


gulp.task('pre-test', function() {
  return gulp.src(['differential_drive/**/*.js'])
    // Covering files
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
  // Force `require` to return covered files
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
    .pipe(istanbul.writeReports({
      dir: './coverage',
      reporters: ['lcov'],
      reportOpts: {
        dir: './coverage'
      }
    }))
    .on('error', function(e) {
      debug(e)
    })
    .on('end', function() {
      debug("mocha done")
      //  done()
    })
});
gulp.task('coverage', ['mocha'], function(done) {
  debug("running coverage")
  gulp.src('coverage/**/lcov.info')
    .pipe(coveralls())
    .on('end', function() {
      debug("coverage sent to coverall")
      done()
      //process.exit()
    })
    .on('error', function(e) {
      debug("coverage cannot be sent to coverall", e)
      process.exit(e)
    })
})
