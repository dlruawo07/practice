function findDollInColumn(board, col) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] !== 0) {
      const doll = board[i][col];
      board[i][col] = 0;
      return doll;
    }
  }
  return 0;
}

function solution(board, moves) {
  let answer = 0;
  const basket = [];

  for (const move of moves) {
    const doll = findDollInColumn(board, move - 1);
    if (doll === 0) continue;
    if (basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
    } else
      basket.push(doll);
  }

  return answer;
}