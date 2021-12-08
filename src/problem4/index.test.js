const path = require('path');
const inputHandler = require('../tools/inputHandler');
const { problem4, problem4Part2 } = require('./index');

test('Problem 4 - Example 1', () => {
  const fileName = path.join(__dirname, 'example1.txt');
  const example1 = inputHandler(fileName, '\n');
  expect(problem4(example1)).toBe(4512);
});

test('Problem 4 Part 2 - Example 1', () => {
  const fileName = path.join(__dirname, 'example1.txt');
  const example2 = inputHandler(fileName, '\n');
  expect(problem4Part2(example2)).toBe(1924);
});
