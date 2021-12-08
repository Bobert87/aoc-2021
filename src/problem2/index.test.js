const path = require('path');
const { problem2, problem2Part2 } = require('./index');
const inputHandler = require('../tools/inputHandler');

const fileName = path.join(__dirname, 'example.txt');

test('Problem 2 - Example 1', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem2(example)).toBe(150);
});

test('Problem 2 Part 2- Example 1', () => {
  const example = inputHandler(fileName, '\n');
  expect(problem2Part2(example)).toBe(900);
});
