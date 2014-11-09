'use strict';

var gulp = require('gulp'),
	jasmine = require('gulp-jasmine');

gulp.task('tests', function() {
	return gulp.src('tests/spec/*.js').
		pipe(jasmine());
});

gulp.task('default', ['tests']);