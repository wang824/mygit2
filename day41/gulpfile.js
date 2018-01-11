





var gulp=require("gulp");
var uglify=require("gulp-uglify");
var html=require("gulp-htmlmin");
var babel=require("gulp-babel");
var minify=require("gulp-minify-css");
gulp.task("jstask",function(){
		gulp.src("code/js/*.js")
			.pipe(babel({"presets": ["es2015"]}))
			.pipe( uglify())
			.pipe( gulp.dest("code/js1"));
	
})
gulp.task("cstask",function(){
		gulp.src("code/css/*.css")
			.pipe( minify())
			.pipe( gulp.dest("code/css1"));
	
})

gulp.task("default",["cstask"]);
