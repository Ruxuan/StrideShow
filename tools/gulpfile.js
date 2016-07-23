var gulp    = require('gulp');

// Server and Browser
var browser = require('browser-sync').create();
var server  = require('gulp-develop-server');

// Plugins
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint
gulp.task('lint', function() {
	return gulp.src(
		['js/**/*.js',
		 'routes/**/*.js',
		 'socket/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// Sass
gulp.task('sass', function() {
	return gulp.src(['scss/**/*.scss'])
		.pipe(sass())
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest('public/styles'))
		.pipe(browser.stream());
});

// Concat and Uglify
gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
		//.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js'))
		//.pipe(rename('all.min.js'))
		//.pipe(uglify())
		//.pipe(gulp.dest('public/js'))
		.pipe(browser.stream());
});

// HTML refresh
gulp.task('html', function() {
	browser.reload();
});

// Server
gulp.task('server', function() {
	server.restart(function(e) {
		if (e) {
			console.log(e);
		} else {
			browser.reload();
		}
	});
});

// Files to watch
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('templates/**/*.html', ['html']);
	gulp.watch(['server.js',
				'models/*.js',
				'routes/**/*.js',
				'socket/**/*.js'], ['server']);
});

////////////////////////////////////////////////

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch'], function() {
	server.listen({
		path: 'server.js'
	});

	/* Can't run alongside socketio
	browser.init({
		proxy: 'localhost:8080'
	});
	*/
	//
	console.log("Gulp Startup Complete");
});