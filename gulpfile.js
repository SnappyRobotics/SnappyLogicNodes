const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
    console.log('It works!');
});

gulp.task('default', function(done) {
    gulp.src('test/**/*_spec.js')
        .pipe(mocha())
        .once('error', function(er) {
            console.error(er.stack);
            done()
        })
        .once('end', function() {
            done()
        })
});
