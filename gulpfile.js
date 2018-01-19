var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('src/assets/css/styles.scss')//chemin du sujet à traiter
		.pipe(sass())
		.pipe(gulp.dest('src/assets/css/'));//chemin vers lequel les fichiers seront crées après l'exécution des tâches gulp
});

gulp.task('default', function(){
	gulp.watch('src/assets/css/styles.scss', ['sass']);
})