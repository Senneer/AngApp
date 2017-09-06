var gulp = require('gulp');
var jade = require('gulp-jade');
var styl = require('gulp-stylus');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '../prod/',
    livereload: true,
    port: 1337
  });
});

gulp.task('styl', function () {
    gulp.src('./styl/style.styl')
        .pipe(styl())
        .pipe(gulp.dest('../prod/css/'))
        .pipe(connect.reload());
});

gulp.task('jade', function () {
    gulp.src('./jade/index.jade')
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('../prod/'))
        .pipe(connect.reload());
});

gulp.task('jade-views', function () {
    gulp.src('./jade/views/*.jade')
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('../prod/views/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./styl/*.styl', ['styl']);
  gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./jade/views/*.jade', ['jade-views']);
  gulp.watch('../prod/js/*.js', ['jade']);
});

gulp.task('default', ['styl', 'jade-views', 'jade', 'connect', 'watch']);

