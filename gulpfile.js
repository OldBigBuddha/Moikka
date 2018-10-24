'use strict';
const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const Hexo = require('hexo');

const hexo = new Hexo(process.cwd(), {});

gulp.task('clean', () => del(['public/**/*']));

gulp.task('generate', cb => {
  hexo.init().then(() => {
      return hexo.call('generate', {
          watch: false
      });
  })
  .then(() => hexo.exit())
  .then(() => cb())
  .catch(err => {
      console.log(err);
      hexo.exit(err);
      return cb(err);
  });
});

gulp.task('add-prefix', () => {
  return gulp.src(['./public/css/**/*.css'])
              .pipe(autoprefixer({
                browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
                cascade: false
              }))
              .pipe(gulp.dest('./public/css'))
});

gulp.task('copy', () => {
  gulp.src('./underscores/*')
  .pipe(gulp.dest("./public"));
});

gulp.task('build', function(cb) {
  runSequence('clean', 'generate', 'add-prefix', 'copy', cb);
});

gulp.task('default', ['build']);