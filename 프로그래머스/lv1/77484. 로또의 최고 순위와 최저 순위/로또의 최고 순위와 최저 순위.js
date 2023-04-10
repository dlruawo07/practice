function solution(lottos, win_nums) {
  var answer = [];
  let min = 0;
  let max = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      min++;
      max++;
    } else if (lottos[i] === 0) {
      max++;
    }
  }
  let rank = [6, 5, 4, 3, 2];
  if (rank.indexOf(max) === -1) {
    answer.push(6);
  } else {
    answer.push(rank.indexOf(max) + 1);
  }
  if (rank.indexOf(min) === -1) {
    answer.push(6);
  } else {
    answer.push(rank.indexOf(min) + 1);
  }
  return answer;
}