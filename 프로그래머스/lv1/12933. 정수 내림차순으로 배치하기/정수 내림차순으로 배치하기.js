function solution(n) {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  return Number(digits.sort((a, b) => b - a).join(''));
}