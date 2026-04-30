// function myTask(callback) {
//   console.log('Hello Павло!');
//   callback();
// }

// async function myTask2() {
//   console.log('Task2: Hello Павло!');
// }

// exports.myTask = myTask;
// exports.myTask2 = myTask2;

// exports.myTask3 = async function myTask3() {
//   console.log('Task3: Hello Павло!');
// }

// exports.myTask4 = async () => {
//   console.log('Task4: Hello Павло!');
// }
const gulp = require('gulp');

exports.cloneFiles = async () => {
  return gulp.src('app/**/*.*') 
    .pipe(gulp.dest('public'));
}

