const path = require('path')
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const istanbul = require('gulp-istanbul')
const coveralls = require('gulp-coveralls')

const debug = require('debug')('snappy:logic:gulpfile')


gulp.task('pre-test', function() {
  return gulp.src(['nodes/**/*.js'])
    // Covering files
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
  // Force `require` to return covered files
});

gulp.task('mocha', ['pre-test'], function() {
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
      reporters: ['lcov', 'json', 'text', 'text-summary'],
      reportOpts: {
        dir: './coverage'
      }
    }))
  // To enforce the coverage
  // .pipe(istanbul.enforceThresholds({
  //   thresholds: {
  //     global: 90
  //   }
  // }))
})

gulp.task('coverage', ['mocha'], function(done) {
  debug("running coverage")
  gulp.src('coverage/lcov.info')
    .pipe(coveralls())
    .on("finish", function() {
      debug("Done coverage")
      done()
    })
})
