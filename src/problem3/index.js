function calculateRates(input) {
  const counter = [];
  for (let i = 0; i < input[0].length; i += 1) {
    counter.push(0);
  }
  const mostCommonCriteria = Math.ceil(input.length / 2);
  for (let i = 0; i < input.length; i += 1) {
    const binNumber = input[i];
    for (let j = 0; j < binNumber.length; j += 1) {
      if (binNumber[j] === '1') {
        counter[j] += 1;
      }
    }
  }
  let gammaRate = '';
  let epsilonRate = '';
  for (let i = 0; i < counter.length; i += 1) {
    const digitGamma = counter[i] > mostCommonCriteria ? '1' : '0';
    gammaRate += digitGamma;
    const digitEpsilon = counter[i] > mostCommonCriteria ? '0' : '1';
    epsilonRate += digitEpsilon;
  }
  return { gammaRate, epsilonRate };
}

function getMostCommonBit(list, position) {
  let count = 0;
  const mostCommonCriteria = Math.ceil(list.length / 2);
  for (let i = 0; i < list.length; i += 1) {
    const element = list[i];
    if (element[position] === '1') count += 1;
  }
  const mostCommonDigit = count >= mostCommonCriteria ? '1' : '0';
  return mostCommonDigit;
}

function getLeastCommonBit(list, position) {
  const leastCommonBit = getMostCommonBit(list, position) === '1' ? '0' : '1';
  return leastCommonBit;
}

function reduceList(list, evalFunction) {
  const inputLenght = list[0].length;
  let currentList = [...list];
  for (let i = 0; i < inputLenght; i += 1) {
    const mostCommonBit = evalFunction(currentList, i);
    const newList = [];
    for (let j = 0; j < currentList.length; j += 1) {
      if (currentList[j][i] === mostCommonBit) newList.push(currentList[j]);
    }
    currentList = newList;
    if (currentList.length === 1) break;
  }
  return currentList;
}

function problem3(input) {
  const rates = calculateRates(input);
  const power = parseInt(rates.gammaRate, 2) * parseInt(rates.epsilonRate, 2);
  return power;
}

function problem3Part2(input) {
  const reduceOxigen = reduceList(input, getMostCommonBit);
  const reduceCO2 = reduceList(input, getLeastCommonBit);
  const lifeSupportRating = parseInt(reduceOxigen, 2) * parseInt(reduceCO2, 2);
  return lifeSupportRating;
}

module.exports = { problem3, problem3Part2 };
