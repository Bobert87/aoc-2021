function getDraws(input) {
  const parsedLine = input[0].trim().replace(/[ ]{2,}/g, " ");
  const stringLine = parsedLine.split(",");
  const draws = stringLine.map((e) => parseInt(e, 10));
  return draws;
}

function getBoards(input) {
  const boards = [];
  let newBoard = [];
  for (let i = 2; i < input.length; i += 1) {
    if (input[i] !== "") {
      const parsedLine = input[i].trim().replace(/[ ]{2,}/g, " ");
      const stringLine = parsedLine.split(" ");
      const intLine = stringLine.map((e) => parseInt(e, 10));
      newBoard.push(intLine);
      if (newBoard.length === 5) {
        boards.push(newBoard);
        newBoard = [];
      }
    }
  }
  return boards;
}

function analyzeBoard(draw, board) {
  const newBoard = [...board];
  const analyzis = {
    sum: 0,
    board: newBoard,
    winner: false,
    winningDraw: NaN,
  };
  const colCount = [0, 0, 0, 0, 0];
  for (let i = 0; i < newBoard.length; i += 1) {
    let rowCount = 0;
    for (let j = 0; j < newBoard.length; j += 1) {
      if (newBoard[i][j] === draw) newBoard[i][j] = Number.NaN;
      if (Number.isNaN(newBoard[i][j])) {
        rowCount += 1;
        colCount[j] += 1;
      }
      if (rowCount === 5) {
        analyzis.winner = true;
        analyzis.winningDraw = draw;
      }
      analyzis.sum += Number.isNaN(newBoard[i][j]) ? 0 : newBoard[i][j];
    }
  }
  for (let z = 0; z < colCount.length; z += 1) {
    if (colCount[z] === 5) {
      analyzis.winner = true;
      analyzis.winningDraw = draw;
    }
  }
  return analyzis;
}

function generateWinnersList(input) {
  const draws = getDraws(input);
  const boards = getBoards(input);
  const winnerBoards = [];
  let order = 0;
  for (let i = 0; i < draws.length; i += 1) {
    const draw = draws[i];
    for (let j = 0; j < boards.length; j += 1) {
      if (!winnerBoards[j]) {
        const board = boards[j];
        const analysis = analyzeBoard(draw, board);
        boards[j] = analysis.board;
        if (analysis.winner) {
          analysis.order = order;
          order += 1;
          winnerBoards[j] = analysis;
        }
      }
    }
  }
  winnerBoards.sort((a, b) => ((a.order > b.order) ? 1 : -1));
  return winnerBoards;
}

function problem4(input) {
  const winners = generateWinnersList(input);
  return winners[0].sum * winners[0].winningDraw;
}

function problem4Part2(input) {
  const winners = generateWinnersList(input);
  const lastElement = winners.length - 1;
  return winners[lastElement].sum * winners[lastElement].winningDraw;
}

module.exports = { problem4, problem4Part2 };
