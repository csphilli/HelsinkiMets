const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");
const autoprefixer = require("autoprefixer");

// If ever having to compile multiple files... Just create the main .scss/.js files at the root of app/scsss or app/js respectively and list them here in their respective const declarations (without extensions)
const scss_files = ["styles"];

const js_files = ["script"];

const files_to_Arr = function (fileArr, extension) {
    const prefix = `app/${extension}/`;
    const suffix = `.${extension}`;
    let files = [];
    fileArr.forEach((name) => files.push(prefix + name + suffix));
    console.log("Compiling:", files);
    return files;
};

// Sass task
function scssTask() {
    return (
        src(files_to_Arr(scss_files, "scss"), {
            sourcemaps: true,
        })
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            // .pipe(postcss(cssnano()))
            // .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(dest("dist", { sourcemaps: "." }))
    );
}

// JS task
function jsTask() {
    return src(files_to_Arr(js_files, "js"), { sourcemaps: true })
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(terser())
        .pipe(dest("dist", { sroucemaps: "." }));
}

// Browser Sync
function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: ".",
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
    watch("*.html", browserSyncReload);
    watch(
        ["app/scss/**/*.scss", "app/js/**/*.js"],
        series(scssTask, jsTask, browserSyncReload)
    );
}

// Default gulp task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
