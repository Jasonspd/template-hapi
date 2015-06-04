var gulp = require("gulp"),
	source = require("vinyl-source-stream"),
	browserify = require("browserify"),
	watchify = require("watchify"),
	reactify = require("reactify");

gulp.task("jest", function () {
    return gulp.src("__tests__").pipe(jest({
        scriptPreprocessor: "preprocessor.js",
        unmockedModulePathPatterns: [
            "../node_modules/react"
        ],
        testPathIgnorePatterns: [
            "node_modules",
            "spec/support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

gulp.task('browserify', function() { // Defining our gulp task for running browserify
    var bundler = browserify({
        entries: ['./src/main.js'], // Our entry point is the main.js file in the src folder 
        transform: [reactify], // Since we're writing JSX, we need to transform the build output back to js
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () {
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('./public/assets/js')); // We want our output file to be placed in the build folder
        console.log('Updated! That took ', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.js", ["jest"]);
  gulp.watch("__tests__/*.js", ["jest"]);
});

gulp.task("heroku:production", function(){
//  runSeq('build', 'minify');
  console.log('hello heroku!');
});

// If we just type 'gulp' in the terminal, it performs the default action.
gulp.task("default", ["browserify", "watch"]);