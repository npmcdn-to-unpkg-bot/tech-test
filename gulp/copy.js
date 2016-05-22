'use strict';

let gulp = require('gulp');

gulp.task('copy:img', [], function () {
    return gulp.src(['src/img/**/*'])
        .pipe(gulp.dest("dist/img"));
});

gulp.task('copy:html', [], function () {
    return gulp.src(['src/*.html'])
        .pipe(gulp.dest("dist"));
});

gulp.task('copy:misc', [], function () {
    return gulp.src(['src/.htaccess', 'src/favicon.png', 'src/favicon.ico', 'src/robots.txt'])
        .pipe(gulp.dest("dist/"));
});