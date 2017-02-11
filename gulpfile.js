const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const debug = require('debug')('SnappyLogicNodes:gulpfile');

gulp.task('watch', function () {
  gulp.watch(['differential_drive/**', 'test/**'], ['mocha-watch'])
});

gulp.task('mocha', function (done) {
  debug("running mocha")
  return gulp.src(['test/**/*_spec.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', gutil.log)
    .on('end', function () {
      debug("mocha done")
      done();
      process.exit()
      process.exit()
    })
});

gulp.task('mocha-watch', function (done) {
  debug("running mocha")
  return gulp.src(['test/**/*_spec.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', gutil.log)
    .on('end', function () {
      debug("mocha done")
    })
});
