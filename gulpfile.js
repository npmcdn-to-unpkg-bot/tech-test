'use strict';
let fs = require('fs');
let gulp = require('gulp');
let watch = require('gulp-chokidar')(gulp);

// Dynamically load all tasks
fs.readdirSync(__dirname + '/gulp').forEach(function(module) {
    require(__dirname + '/gulp/' + module)
});

// Watcher tasks
gulp.task('watch', function () {
    let scssWatcher = watch('src/scss/**/*.scss', {root: 'src/css'});
    let appWatcher = watch('src/js/app/**/*.js', {root: 'src/js/app'});

    appWatcher.on('change', function () {
		gulp.run('scripts:app');
	});
	
	scssWatcher.on('change', function(){
		gulp.run('css');
	});

    watch('src/img/**/*', {root: 'src/img'}, ['copy:img']);
    watch('src/**/*.html', {root: 'src'}, ['templates', 'copy:html']);
    watch(['src/.htaccess', 'src/favicon.ico', 'src/robots.txt', 'src/mocks/**/*'], {root: 'src'}, ['copy:misc']);
});

// Main tasks
let end = function(){ console.log('Gulp process has completed.'); process.exit(0); };
gulp.task('dev', ['copy:html', 'copy:img', 'copy:misc', 'templates', 'scripts:vendor', 'scripts:app', 'scripts:angular', 'css'], end);