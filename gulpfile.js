var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require('gulp-sass');

var PUBLIC = "public";

//Jade
gulp.task("jade", function() {
    gulp.src(
        ["view/**/*.jade",'!' + "view/**/_*.jade"]
    )
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(PUBLIC));
});

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(PUBLIC + '/css')
    );
});

gulp.task("default",["jade", "sass"], function() {
    gulp.watch("view/**/*.jade",["jade"]);
    gulp.watch("sass/**/*.scss",["sass"]);
});