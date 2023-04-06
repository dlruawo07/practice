function solution(k, score) {
  var answer = [];
  let array = [];

  for (let i = 0; i < score.length; i++) {
    array.push(score[i]);
    array.sort((a, b) => a - b);

    if (i < k) {
      answer.push(Math.min(...array));
    } else {
      answer.push(array[array.length - k]);
    }
  }
  return answer;
}
