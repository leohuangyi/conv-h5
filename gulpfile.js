/**
 * Created by Leo on 16/4/11.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 4 versions'] });
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

gulp.task('build', ['css','js']);
gulp.task('dev', function(){
    gulp.watch('./demos/**/*.less', ['css']);
    gulp.watch(['./demos/**/*.js','!./demos/**/*.min.js'], ['js']);
});
gulp.task('css', function(){
    gulp.src('./demos/**/*.less')
        .pipe(less({
            plugins: [autoprefix, cleanCSSPlugin]
        }))
        .pipe(gulp.dest('./demos'));
});
gulp.task('js', function(){
    gulp.src(['./demos/**/*.js','!./demos/**/*.min.js'])
        .pipe(uglify())
        .pipe(rename(function(path){
            path.basename += '.min'
        }))
        .pipe(gulp.dest('./demos'));
});