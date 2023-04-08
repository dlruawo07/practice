function solution(n) {
  var answer = [];
  let len = String(n).length;
  for (let i = 0; i < len; i++) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}