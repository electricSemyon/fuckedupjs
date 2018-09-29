"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var wait = require('gulp-wait');

gulp.task('style', function () {
  return gulp.src('sass/style.scss')
  .pipe(wait(500))
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['style'])
});