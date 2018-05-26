var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error'), sass.logError)
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', function(){
    console.log('Starting gulp');
    gulp.watch('src/sass/*.scss', ['styles']);
});