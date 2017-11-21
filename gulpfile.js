'use strict'

const gulp = require('gulp'),
    inject = require('gulp-inject')

gulp.task('js', () => {
  const target = gulp.src('./views/layout/default.ejs')
  const sources = gulp.src('./public/**/bundle.js', {read: false})

  target
  .pipe(inject(sources, {ignorePath: 'public'}))
  .pipe(gulp.dest('./views/layout'))

})
