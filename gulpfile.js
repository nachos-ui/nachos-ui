const gulp = require('gulp')
const replace = require('gulp-replace')

gulp.task('semistrip', () => {
  gulp.src('{src,docs}/**/*.js')
    .pipe(replace(/;$/gm, ''))
    .pipe(gulp.dest((file) => {
      return file.base
    }))
})
