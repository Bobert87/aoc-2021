const fs = require('fs');

module.exports = function getArrayFromFile(fileName, splitter) {
  return fs.readFileSync(fileName).toString().split(splitter);
};
