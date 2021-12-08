function problem1(input) {
  const parsedInput = input.map((e) => parseInt(e, 10));
  let count = 0;
  let lastDepth = parsedInput[0];
  for (let i = 1; i < parsedInput.length; i += 1) {
    const depth = parsedInput[i];
    if (depth > lastDepth) count += 1;
    lastDepth = depth;
  }
  return count;
}

function problem1Part2(input) {
  const parsedInput = input.map((e) => parseInt(e, 10));
  let count = 0;
  let lastDepthWindow = parsedInput[0] + parsedInput[1] + parsedInput[2];
  for (let i = 1; i < parsedInput.length - 2; i += 1) {
    const depthWindow = parsedInput[i] + parsedInput[i + 1] + parsedInput[i + 2];
    if (depthWindow > lastDepthWindow) count += 1;
    lastDepthWindow = depthWindow;
  }
  return count;
}

module.exports = { problem1, problem1Part2 };
