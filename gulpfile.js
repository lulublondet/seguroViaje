
/* ======================================================================================================
* Plugins utilizados
* ======================================================================================================*/
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	nodemon = require('gulp-nodemon');
    browserSync = require('browser-sync').create();





/* ======================================================================================================
* Tareas del HTML
* ======================================================================================================*/
gulp.task('html', ()=>{
	gulp.src("./src/*.html")
	.pipe(gulp.dest("./dist"))
	.pipe(browserSync.stream());
});




/* ======================================================================================================
* Tarea sobre los Estilos
* ======================================================================================================*/
gulp.task('styles', function () {
    gulp.src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe( sass({
            includePaths: require('node-bourbon').includePaths,
            style: 'compressed',
          })
    ).on('error', notify.onError(function (error) {
       return 'Error al compilar sass.\n Detalles en la consola.\n' + error;
    }))
   .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
   .pipe(sourcemaps.write('./maps'))
   .pipe(gulp.dest("./dist/assets/css/"))
   .pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
   .pipe(browserSync.stream());
});

/* ======================================================================================================
* Tarea sobre los Scripts
* ======================================================================================================*/
gulp.task('scripts', function() {
    return gulp.src('./src/assets/js/**/*.js')
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
});


/* ======================================================================================================
* Tarea sobre las imagenes
* ======================================================================================================*/
gulp.task('img', ()=>{
	gulp.src('./src/assets/images/*.{jpg,png}')
	.pipe(gulp.dest('./dist/assets/images/'))
});

gulp.task('font', ()=>{
	gulp.src('./src/assets/fonts/*')
	.pipe(gulp.dest('./dist/assets/fonts/'))
});

/* ======================================================================================================
* Browser Sync
* ======================================================================================================*/
gulp.task('browser-sync',['nodemon'], function() {
    browserSync.init({
        injectChanges: true,
        files: ['/src/*.html', './dist/**/*.{html,css,js,png,jpg}'],
        server: "./dist/",

		

    });
});


gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});






/* ======================================================================================================
* Tarea por default
* ======================================================================================================*/
gulp.task('watch', function() {
	gulp.watch('./src/*.html',['html']); //vigila las tareas en html
  gulp.watch('./src/assets/scss/**/*.scss', ['styles']); // Vigila cambios en los estilos
  gulp.watch('./src/assets/js/**/*.js', ['scripts']); //Vijila cambios en todo los scripts
	gulp.watch('./src/assets/images/*.{png,jpg}', ['img']); //Vijila cambios en todo los scripts
  gulp.watch('./src/assets/fonts/*', ['font']); //Vijila cambios en todo los scripts

});


/* ======================================================================================================
* Default Task
* ======================================================================================================*/
gulp.task('default', ['styles', 'scripts', 'browser-sync', 'watch','html','img', 'font']);
