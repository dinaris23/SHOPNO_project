var	gulp    			 = require('gulp'),
				scss        = require('gulp-sass'),
				browserSync = require('browser-sync'),
				uglify      = require('gulp-uglifyjs'),
				concat      = require('gulp-concat'),
				cssnano     = require('gulp-cssnano'),
				rename      = require('gulp-rename'),
				del         = require('del'),
				imagemin    = require('gulp-imagemin'),
				pngquant    = require('imagemin-pngquant'),
				autoprefixer= require('gulp-autoprefixer'),
				cheerio = require('gulp-cheerio'),
				replace = require('gulp-replace');


gulp.task('scss', function() {
	return gulp.src('app/scss/main.scss')
	.pipe(scss().on( 'error', function( error )
      {console.log( error );} )
	)
	.pipe(autoprefixer(['last 4 versions'], {cascade:true}))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'})) 
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('js-libs', function() {
	return gulp.src([ 
					'app/libs/jquery.min.js', 
					'app/libs/slick.min.js' 
					])
					.pipe(concat('libs.min.js')) 
					.pipe(uglify()) 
					.pipe(gulp.dest('app/js'));
});

gulp.task('js', function() {
	return gulp.src('app/js/layout/*.js')
					.pipe(concat('scripts.min.js')) 
					.pipe(uglify()) 
					.pipe(gulp.dest('app/js'))
					.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'scss', 'js'], function() {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/css/libs*.css", browserSync.reload);
	gulp.watch('app/js/layout/*.js', ['js']);
});

gulp.task('build', ['clean', 'scss', 'img', 'js', 'js-libs'], function() {
	var buildIndex = gulp.src('app/index.html')
	.pipe(gulp.dest('dist'));
	
	var buildCss = gulp.src([
		'app/css/main.min.css',
		])
	.pipe(gulp.dest('dist/css'));
	
	var buildJS = gulp.src([ 
		'app/js/libs.min.js', 
		'app/js/scripts.min.js' 
		])
	.pipe(gulp.dest('dist/js'));
	
	var buildSvgSprite = gulp.src('app/img/svg/sprite.svg')
	.pipe(gulp.dest('dist/img/svg'));
});


// Default Task
gulp.task('default', ['watch']);