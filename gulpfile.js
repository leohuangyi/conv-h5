var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gRename = require('gulp-rename');
var del = require('del');
var packageConfig = require('./package.json');
var uglify = require('gulp-uglify');

gulp.task('build', ['clean', 'css',  'js']);
gulp.task('dev', function(){
    gulp.watch('./src/conv-h5.js', ['js']);
});
gulp.task('clean', function(){
    del('./dist/*');
});
gulp.task('conv-h5-build', function(cb){
    return gulp.src('./src/conv-h5.js')
        .pipe(uglify())
        .pipe(gRename(function(path){
            path.extname = '.' + packageConfig.version + '.source.min.js'
        }))
        .pipe(gulp.dest('./dist'));
});
gulp.task('js', ['conv-h5-build'], function(){
    gulp.src(['./dist/conv-h5.'+packageConfig.version+'.source.min.js','./src/public/Swiper/dist/js/Swiper.jquery.min.js'])
        .pipe(gulpConcat('conv-h5.'+packageConfig.version+'.min.js'))
        .pipe(gulp.dest('./dist'));
});
gulp.task('css', function(){
    gulp.src([
        './src/public/Swiper/dist/css/swiper.min.css',
        './src/public/animate.css/animate.min.css'
    ]).pipe(
        gulpConcat('conv-h5.'+packageConfig.version+'.min.css')
    ).pipe(gulp.dest('./dist/'));
});