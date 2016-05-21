'use strict';
let fs = require('fs');
let gulp = require('gulp');
let watch = require('gulp-chokidar')(gulp);

// Dynamically load all tasks
fs.readdirSync(__dirname + '/gulp').forEach(function(module) {
    require(__dirname + '/gulp/' + module)
});

// Main tasks
let end = function(){ console.log('Gulp process has completed.'); process.exit(0); };
gulp.task('dev', ['copy:html', 'copy:img', 'copy:misc', 'templates', 'scripts:vendor', 'scripts:app', 'scripts:angular', 'css'], end);