'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Opens a  URL in the browser

var config = {
	port: 8000,
	devBaseURL: 'http:://localhost',
	paths: {
		html: './src/*.html',
		dist: './dist'
	}
}
//Start a local dev server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseURL,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html').pipe(open('', { url: config.devBaseURL + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'open']);



