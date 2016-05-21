'use strict';

let gulp = require('gulp');
let templateCache = require('gulp-angular-templatecache');
let minifyHtml = require('gulp-minify-html');

let templates = [
    'src/js/app/**/*.html'
];

// Templates
gulp.task('templates', [], function(){
    return gulp.src(templates)
        .pipe(minifyHtml({empty: true}))
        .pipe(templateCache('templates.min.js', {
                root: '/',
                module: 'modTemplates',
                standalone: true
            }
        ))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('dist/js'));
});