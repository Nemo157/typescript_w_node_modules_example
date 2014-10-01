var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var path = require('path');

gulp.task('browserify', function () {
    return browserify({ debug: true })
        .plugin('tsify')
        .plugin('minifyify', { map: 'bundle.js.map', output: './dist/bundle.js.map' })
        .add(path.resolve('./src/index.ts'))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['browserify']);

