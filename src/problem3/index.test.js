const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, 'example1.txt');
const { problem3, problem3Part2 } = require('./index');

test('Problem 3 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem3(example1)).toBe(198);
});

test('Problem 3 Part 2 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem3Part2(example1)).toBe(230);
});
