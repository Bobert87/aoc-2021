const inputHandler = require('./inputHandler');
const path = require('path');
const exp = require('constants');

test('Input Handler, returns an array', () => {
  const fileName = path.join(__dirname,'inputHandlerTest.txt')
  const expectArray = inputHandler(fileName,'\n');  
  expect(expectArray.length).toBe(10);
})