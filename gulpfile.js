const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);    
    watch("./js/**/*.js").on('change', browserSync.reload);
};

//Sass
function serveSass() {
    return src("./sass/**/*.sass")
        .pipe(sass())
        //gulp-autoprefixer
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        //browser-sync
        .pipe(browserSync.stream());
};

exports.serve = bs;