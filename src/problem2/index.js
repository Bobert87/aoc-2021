function problem2(input) {
  let horizontal = 0;
  let depth = 0;
  const instructions = input.map((e) => {
    const parts = e.split(' ');
    const instruction = { direction: parts[0], magnitude: parts[1] * 1 };
    return instruction;
  });
  instructions.forEach((e) => {
    switch (e.direction) {
      case 'forward':
        horizontal += e.magnitude;
        break;
      case 'down':
        depth += e.magnitude;
        break;
      case 'up':
        depth -= e.magnitude;
        break;
      default:
        console.log('Instruction not recognized');
        break;
    }
  });
  return depth * horizontal;
}

function problem2Part2(input) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  const instructions = input.map((e) => {
    const parts = e.split(' ');
    const instruction = { direction: parts[0], magnitude: parts[1] * 1 };
    return instruction;
  });
  instructions.forEach((e) => {
    switch (e.direction) {
      case 'forward':
        horizontal += e.magnitude;
        depth += aim * e.magnitude;
        break;
      case 'down':
        aim += e.magnitude;
        break;
      case 'up':
        aim -= e.magnitude;
        break;
      default:
        console.log('Instruction not recognized');
        break;
    }
  });
  return depth * horizontal;
}

module.exports = { problem2, problem2Part2 };
