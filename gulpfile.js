// Load plugins
const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const header = require('gulp-header');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');

// Copy third party libraries from /node_modules into /dist/vendor
gulp.task('vendor', cb => {
  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./dist/vendor/bootstrap'))

  // Font Awesome
  gulp.src([
      './node_modules/@fortawesome/**/*',
    ])
    .pipe(gulp.dest('./dist/vendor'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./dist/vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./dist/vendor/jquery-easing'))

  // Magnific Popup
  gulp.src([
      './node_modules/magnific-popup/dist/*'
    ])
    .pipe(gulp.dest('./dist/vendor/magnific-popup'))

  // Scrollreveal
  gulp.src([
      './node_modules/scrollreveal/dist/*.js'
    ])
    .pipe(gulp.dest('./dist/vendor/scrollreveal'))

  // Countup
  gulp.src([
    './node_modules/countup.js/dist/*.js'
  ])
  .pipe(gulp.dest('./dist/vendor/countup.js'))

  cb();
});

// CSS task
const css = () => gulp
  .src('./src/scss/*.scss')
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .on('error', sass.logError)
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browsersync.stream());

// JS task
const js = () => gulp
  .src([
    './src/js/*.js',
    '!./src/js/*.min.js',
    '!./src/js/contact_me.js',
    '!./src/js/jqBootstrapValidation.js'
  ])
  .pipe(babel())
  .pipe(browserify({
    transform: ['babelify', 'reactify', 'browserify-jsx']
  }))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browsersync.stream());

// Tasks
gulp.task('css', css);
gulp.task('js', js);

// BrowserSync
const browserSync = done => {
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

// BrowserSync Reload
const browserSyncReload = done => {
  browsersync.reload();
  done();
}

// Watch files
const watchFiles = () => {
  gulp.watch('./src/scss/**/*', css);
  gulp.watch(['./src/js/**/*.{js,jsx}', '!./src/js/*.min.{js,jsx}'], js);
  gulp.watch('./**/*.html', browserSyncReload);
}

// default task
gulp.task('default', gulp.parallel('vendor', css, js));

// dev task
gulp.task('dev', gulp.parallel(watchFiles, browserSync));
