'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var jsonServer = require('gulp-json-srv');
var opn = require('opn');


var server = {
  host: 'localhost',
  port: '9000'
}

var jserver = jsonServer.create(
  {
	port: parseInt(server.port)+1,
	baseUrl: '/api',
	rewriteRules: {
		'/': '/api/'
	}
}
);


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      host:server.host,
      port:server.port,
      directoryListing: false,
      open: true
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});


gulp.task('start',function(){
  return gulp.src("contactdata.json")
         .pipe(jserver.pipe());

});

gulp.task("watch", function () {
    gulp.watch(["contactdata.json"], ["start"]);
});

gulp.task('default',["webserver","start","watch"]);
