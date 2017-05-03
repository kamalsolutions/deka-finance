var gulp= require('gulp');
var concat= require('gulp-concat');
var rename= require('gulp-rename');
var sass= require('gulp-sass');
var uglify= require('gulp-uglify');

gulp.task("compileSass",function(){

    return gulp.src("assets/css/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))

})

gulp.task("watchSass",function(){
    gulp.watch(["assets/**/*.sass","assets/**/*.scss"],["compileSass"])
})

gulp.task("concatStyle",["compileSass"],function(){
    gulp.src([
        "assets/css/bootstrap.min.css",
        "assets/css/font-awesome.min.css",
        "public/css/main.css"
        ])
    .pipe(concat("main.css"))
    .pipe(gulp.dest("public/css"))
})

gulp.task("build",["concatStyle"],function(){})