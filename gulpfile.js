var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    sass      = require('gulp-sass'),
    minifyCSS = require('gulp-csso');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});