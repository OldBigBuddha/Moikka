'use strict';
const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
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

gulp.task('copy', () => {
  gulp.src('./underscores/*')
  .pipe(gulp.dest("./public"));
});

gulp.task('build', function(cb) {
  runSequence('clean', 'generate', 'copy', cb);
});

gulp.task('default', ['build']);