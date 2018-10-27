'use strict';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import Hexo from 'hexo';

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

gulp.task('cleanCSS', () => {
  return gulp.src(['./public/css/**/*.css'])
              .pipe(autoprefixer({
                browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
                cascade: false
              }))
              .pipe(cleanCSS())
              .pipe(gulp.dest('./public/css'))
});

gulp.task('copy', () => {
  gulp.src('./underscores/*')
  .pipe(gulp.dest("./public"));
});

gulp.task('build', function(cb) {
  runSequence('clean', 'generate', 'cleanCSS', 'copy', cb);
});

gulp.task('default', ['build']);