const gulp = require('gulp');
const path = require('path')
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer');
const del = require('del')
// const gzip = require('gulp-gzip');

sass.compiler = require('node-sass');

const cssInputPath = `${path.join(__dirname, './src/scss/*.scss')}`
const cssOutputPath = path.join(__dirname, './www/css')

gulp.task('scss', async function () {
  await del([path.join(cssOutputPath, '/*.css')], {
    force: true
  })
  return gulp.src(cssInputPath)
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    // .pipe(gzip())
    .pipe(gulp.dest(cssOutputPath));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});
