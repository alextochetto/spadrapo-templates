/// <binding BeforeBuild='beforeBuild' />
var gulp = require('gulp'),
    gulp_concat = require('gulp-concat'),
    gulp_rename = require('gulp-rename'),
    gulp_watch = require('gulp-watch'),
    gulp_less = require("gulp-less"),
    gulp_uglify = require('gulp-uglify');

gulp.task("less", function () {
    gulp.src('styles/theme*.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('bootstrap', function () {
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('wwwroot/js'))
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js.map')
        .pipe(gulp.dest('wwwroot'))
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/bootstrap/dist/css/bootstrap.min.css.map'])
        .pipe(gulp.dest('wwwroot/css'))
})

gulp.task('signalr', function () {
    gulp.src('node_modules/@aspnet/signalr/dist/browser/signalr.min.js.map')
        .pipe(gulp.dest('wwwroot'))
})

gulp.task('publish', ['less']);

gulp.task('watch:less', function () {
    gulp.watch('styles/*.less', ['less']);
});

gulp.task('beforeBuild', ['publish']);

gulp.task('watch', ['watch:less']);

gulp.task('default', ['watch', 'bootstrap', 'signalr']);