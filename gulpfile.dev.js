"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify');

gulp.task('html', function () {
  return gulp.src('stage/html/*.pug').pipe(pug({
    pretty: true
  })).pipe(gulp.dest('dist'));
}); // Css Task

gulp.task('css', function () {
  return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"]).pipe(sourcemaps.init()).pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError)).pipe(autoprefixer()).pipe(concat('main.css')).pipe(sourcemaps.write('.')).pipe(gulp.dest('dist/css'));
}); // JS Task

gulp.task('js', function () {
  return gulp.src("stage/js/*.js").pipe(concat('main.js')).pipe(minify()).pipe(gulp.dest('dist/js'));
}); // Watch Tasks

gulp.task('watch', function () {
  gulp.watch("stage/html/**/*.pug", ['html']);
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ['css']);
  gulp.watch("stage/js/*.js", ['js']);
});