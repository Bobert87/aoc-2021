const path = require('path');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, 'example1.txt');
const { problem1, problem1Part2 } = require('./index');

test('Problem 1 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem1(example1)).toBe(7);
});

test('Problem 1 Part 2 - Example 1', () => {
  const example1 = inputHandler(fileName, '\n');
  expect(problem1Part2(example1)).toBe(5);
});
