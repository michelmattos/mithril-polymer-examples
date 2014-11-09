'use strict';

var gulp = require('gulp'),
	jasmine = require('gulp-jasmine');

gulp.task('tests', function() {
	return gulp.src('tests/specs/**/*.js').
		pipe(jasmine());
});

gulp.task('default', ['tests']);