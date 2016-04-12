var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gRename = require('gulp-rename');
var del = require('del');
var packageConfig = require('./package.json');

gulp.task('build', ['clean', 'css', 'js']);

gulp.task('clean', function(){
    del('./dist/*');
});
gulp.task('js', function(){
    gulp.src(['./src/libs/Swiper/dist/js/jquery.min.js'])
        .pipe(gRename(function(path){
            var basename = 'conv-h5' + path.basename.slice(6);
            basename = basename.slice(0, -3);
            path.basename = basename;
            path.extname = packageConfig.version + '.min.js'
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('css', function(){
    gulp.src([
        './src/libs/Swiper/dist/css/swiper.min.css',
        './src/libs/animate.css/animate.min.css'
    ]).pipe(
        gulpConcat('conv-h5.'+packageConfig.version+'.min.css')
    ).pipe(gulp.dest('./dist/'));
});