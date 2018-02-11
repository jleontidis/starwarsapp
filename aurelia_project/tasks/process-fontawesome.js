import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processFontAwesome() {
  return gulp.src(project.fontAwesomeProcessor.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(gulp.dest(build.bundle()));
}
