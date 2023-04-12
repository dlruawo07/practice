function solution(board, moves) {
  var answer = 0;
  let basket = [];

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        let target = board[i][move - 1];
        board[i][move - 1] = 0;
        if (basket[basket.length - 1] === target) {
          basket.pop();
          answer += 2;
        } else basket.push(target);
        break;
      }
    }
  }
  return answer;
}