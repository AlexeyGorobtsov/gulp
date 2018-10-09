const gulp = require('gulp');
const htmltidy = require('gulp-htmltidy');
const autoperfixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

gulp.task('default', () => {
    console.log('Gulp running');
});

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('build'));
});

gulp.task('css', () => {
    return gulp.src('src/style.css')
        .pipe(csslint())
        .pipe(csslint.formatter('compact'))
        .pipe(autoperfixer({
            browsers: ['last 5 version'],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('js', () => {
   return gulp.src('src/main.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
       .pipe(babel({
           presets: ['@babel/env']
       }))
       .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
   gulp.watch('src/*.html', ['html']);
   gulp.watch('src/*.css', ['css']);
   gulp.watch('src/*.js', ['js']);
});