var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("default",function(){
	console.log(1);
})

gulp.task("cleanCss",function(){
	gulp.src("css/*.css")
		.pipe(cleanCss())
		.pipe(concat("all.css"))
		.pipe(rename({
			suffix:".min"
		}))
		.pipe(gulp.dest("bulid/css"))
})

gulp.task("uglify",function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(concat("all.js"))
		.pipe(rename({
			suffix:".min"
		}))
		.pipe(gulp.dest("bulid/js"))
})