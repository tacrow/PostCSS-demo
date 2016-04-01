/*
 * postcss-demo gulpfile.js
 */
var src = {
	postcss: 'src/postcss/**/*.css',
	css:     'src/css/',
	allcss:  'src/css/all.css',
	build:   'src/build/'
}

var gulp = require('gulp'),
	$    = require('gulp-load-plugins')(),
	runSequence = require('run-sequence');

var plugins = [
	require('postcss-partial-import'),
	require('autoprefixer'),
	require('postcss-mixins'),
	require('postcss-nested'),
	require('postcss-simple-vars'),
	require('postcss-custom-properties'),
	require('postcss-custom-selectors'),
	require('postcss-custom-media'),
	require('postcss-media-minmax'),
	require('postcss-color-function'),
	require('postcss-selector-matches'),
	require('postcss-selector-not'),
	require('pleeease-filters'),
	require('stylelint'),
	require('postcss-reporter')({ clearMessages: true })
];

var cssnano = [
	require('cssnano')
];

gulp.task('postcss', function() {
	return gulp.src(src.postcss)
		.pipe($.plumber())
		.pipe($.postcss(plugins))
		.pipe(gulp.dest(src.css));
});

gulp.task('nano', function() {
	return gulp.src(src.allcss)
		.pipe($.plumber())
		.pipe($.postcss(cssnano))
		.pipe($.rename({ suffix: '.min' }))
		.pipe(gulp.dest(src.build));
});

// watch
gulp.task('watch', function() {
	gulp.watch(src.postcss, ['postcss']);
});

// build
gulp.task('build', function(callback) {
	runSequence('postcss', 'nano', callback);
});

// default
gulp.task('default', ['watch']);
