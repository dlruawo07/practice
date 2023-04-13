function solution(a, b, n) {
  var answer = 0;
  let remainder = 0;
  while (n > 0) {
    if (remainder !== 0) {
      n += remainder;
    }
    remainder = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
  }
  return answer;
}