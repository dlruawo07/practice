function solution(n) {
  var answer = 0;
  let len = String(n).length;

  for (let i = 0; i < len; i++) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }

  console.log(answer);

  return answer;
}