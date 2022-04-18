const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");
const autoprefixer = require("autoprefixer");
const htmlMin = require("gulp-htmlmin");

// Sass task
function scssTask() {
    return src("app/scss/*.scss", {
        sourcemaps: false,
    })
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest("dist", { sourcemaps: "." }));
}

// minify HTML
function minHtml() {
    return src("app/src/*.html", { sourcemaps: false })
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest("dist", { sourcemaps: "." }));
}

// JS task
function jsTask() {
    return src("app/js/*.js", { sourcemaps: false })
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(terser())
        .pipe(dest("dist", { sroucemaps: "." }));
}

// Browser Sync
function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: "dist/",
        },
        notify: {
            styles: {
                top: "auto",
                bottom: "0",
            },
        },
    });
    cb();
}

// Browser Sync Reload
function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch("app/src/*.html", series(minHtml, browserSyncReload));
    watch(
        ["app/scss/**/*.scss", "app/js/**/*.js"],
        series(scssTask, jsTask, browserSyncReload)
    );
}

// Default gulp task
exports.default = series(
    scssTask,
    jsTask,
    minHtml,
    browserSyncServe,
    watchTask
);
