const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

gulp.task('watch', function() {
    gulp.watch(['differential_drive/**', 'test/**'], ['mocha-watch']);
});

gulp.task('mocha', function(done) {
    return gulp.src(['test/**/*_spec.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'spec'
        }))
        .on('error', gutil.log)
        .on('end', function() {
            done();
            process.exit()
        })
});

gulp.task('mocha-watch', function(done) {
    return gulp.src(['test/**/*_spec.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'spec'
        }))
        .on('error', gutil.log)
});
