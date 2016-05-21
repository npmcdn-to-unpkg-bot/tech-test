'use strict';

let gulp = require('gulp');
let uglify = require('gulp-uglify');
let babel = require("gulp-babel");
let concat = require('gulp-concat');
let eslint = require('gulp-eslint');

let vendorScripts = [];

let libraries = [
    'src/js/vendor/jquery/lib/jquery-2.2.4.min.js',
    'src/js/vendor/angularjs/lib/angular.js',
    'src/js/vendor/angularjs/lib/angular-route.js',
    'src/js/vendor/angularjs/lib/angular-resource.js',
    'src/js/vendor/angularjs/lib/angular-sanitize.js',
    'src/js/vendor/angularjs/lib/angular-animate.js',
    'src/js/vendor/angularjs/lib/angular-aria.js',
    'src/js/vendor/angularjs/lib/angular-touch.js'
];

let angularAppScripts = [
    'src/js/app/app.js',
    'src/js/app/common/common.js',
    'src/js/app/contacts/contacts.js',
    '!src/js/app/**/*.spec.js',
    'src/js/app/**/*.js'
];

// scripts:vendor
gulp.task('scripts:vendor', [], function() {
    return gulp.src(vendorScripts)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// scripts:angular
gulp.task('scripts:angular', [], function() {
    return gulp.src(libraries)
        .pipe(concat('angular.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// scripts:app
gulp.task('scripts:app', [], function() {
    return gulp.src(angularAppScripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .on('error', console.error.bind(console))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});