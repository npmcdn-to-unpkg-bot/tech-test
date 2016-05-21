'use strict';

let gulp = require('gulp');
let sass = require('gulp-ruby-sass');
let sourcemaps = require('gulp-sourcemaps');
let minifyCSS = require('gulp-minify-css');
let concat = require('gulp-concat');

gulp.task('css', function() {
    return sass('src/scss/app.scss', {sourcemap: true, style: 'compact'})
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});