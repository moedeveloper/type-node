"use strict";

let gulp = require('gulp');
let nodemon = require("gulp-nodemon");
var typescript = require('gulp-tsc');


gulp.task("watch", () => {
  gulp.watch('src/**/*.ts', ["compile"]);
});
 
gulp.task('compile', function(){
  gulp.src(['/src/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('dist/'))
});

gulp.task("serve", ["compile", "watch"], () => {
  nodemon({
    script: "dist/index.js",
    env: { "NODE_ENV": "development" }
  })
    .on("restart", () => {
      console.log("restarted");
    })
})
gulp.task("default", ["watch", "compile", "serve"]);

//---------------------------------
// const gulp = require('gulp');
// const ts = require('gulp-typescript');
// let nodemon = require("gulp-nodemon");

// const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// // pull in the project TypeScript config
// const tsProject = ts.createProject('tsconfig.json');

// gulp.task('scripts', () => {
//   const tsResult = tsProject.src()
//   .pipe(tsProject());
//   return tsResult.js.pipe(gulp.dest('dist'));
// });

// gulp.task('watch', ['scripts'], () => {
//   gulp.watch('src/**/*.ts', ['scripts']);
// });

// gulp.task('assets', function() {
//   return gulp.src(JSON_FILES)
//   .pipe(gulp.dest('dist'));
// });

// gulp.task("serve", () => {
//   nodemon({
//     script: "dist/index.js",
//     env: { "NODE_ENV": "development" }
//   })
//     .on("restart", () => {
//       console.log("restarted");
//     })
// })

// gulp.task('default', ['watch', 'assets', 'serve']);

