var gulp = require('gulp'); //va chercher le module dans node_module
var sass = require('gulp-sass'); //va chercher le module dans node_module

gulp.task('sass', function(){ // nom de la tâche et function de callback
	return gulp.src('src/assets/css/styles.scss')//chemin du sujet à traiter
		.pipe(sass())
		.pipe(gulp.dest('src/assets/css/'));//chemin vers lequel les fichiers seront crées après l'exécution des tâches gulp
});

gulp.task('default', function(){ //function de callback qui lance une liste de tâche précise lorsque gulp est appelé dans la console
	gulp.watch('src/assets/css/styles.scss', ['sass']);
})