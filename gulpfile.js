var gulp = require('gulp');
var webpack = require('webpack-stream');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp
        .src('./dist')
        .pipe(clean());
});

gulp.task('pack', ['clean'], function () {
    return gulp
        .src('./**/**.**')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', ['clean'], function () {
    return gulp
        .src(['./**/**.html', './**/**.png', '!./node_modules/**/**.**'], {base: '.'})
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./**/**.**', '!./node_modules/**/**.**', '!./dist/**/**.**'], ['default'])
});

gulp.task('default', ['clean', 'pack', 'copy']);