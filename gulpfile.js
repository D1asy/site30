const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

exports.minifyCSS = async () => {
    return gulp.src('app/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public'));
}

exports.minifyJS = async () => {
    return gulp.src('app/**/*.js') 
        .pipe(uglify())
        .pipe(gulp.dest('public'));
}

exports.copyHTML = async () => {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('public'));
}

exports.default = gulp.series(
    exports.copyHTML, 
    exports.minifyCSS, 
    exports.minifyJS
);
