function getLines(input) {
  const rawCoordinates = input.map((e) => e.split(' -> '));
  const lines = rawCoordinates.map((e) => {
    const start = e[0].split(',');
    const end = e[1].split(',');
    return {
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
    };
  });
  return lines;
}

function problem5(input) {
  return getLines(input);
}

function problem5Part2(input) {
  return input;
}

module.exports = { problem5, problem5Part2 };
