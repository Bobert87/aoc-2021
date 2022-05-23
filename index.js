const { problem1 } = require('./src/problem1/index');
const { problem1Part2 } = require('./src/problem1/index');
const { problem2, problem2Part2 } = require('./src/problem2/index');
const { problem3, problem3Part2 } = require('./src/problem3/index');
const { problem4, problem4Part2 } = require('./src/problem4/index');
const { problem5, problem5Part2 } = require('./src/problem5/index');
const inputHandler = require('./src/tools/inputHandler');

console.log(problem1(inputHandler('./src/problem1/input.txt', '\n')));
console.log(problem1Part2(inputHandler('./src/problem1/input.txt', '\n')));
console.log(problem2(inputHandler('./src/problem2/input.txt', '\n')));
console.log(problem2Part2(inputHandler('./src/problem2/input.txt', '\n')));
console.log(problem3(inputHandler('./src/problem3/input.txt', '\n')));
console.log(problem3Part2(inputHandler('./src/problem3/input.txt', '\n')));
console.log(problem4(inputHandler('./src/problem4/input.txt', '\n')));
console.log(problem4Part2(inputHandler('./src/problem4/input.txt', '\n')));
console.log(problem5(inputHandler('./src/problem5/example1.txt', '\n')));
console.log(problem5Part2(inputHandler('./src/problem5/example1.txt', '\n')));
