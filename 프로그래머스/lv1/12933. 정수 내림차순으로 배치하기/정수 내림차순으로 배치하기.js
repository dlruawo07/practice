function solution(n) {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  return Number(digits.sort((a, b) => b - a).join(''));
}

// 기존 코드
// function solution(n) {
//     return Number(String(n).split("").sort((a, b) => b - a).join(""));
// }

// 각 자릿수를 배열에 담고 난 후 sort vs. 문자열로 바꿔서 sort
// 타입 변환이 첫 번째가 더 적어서 더 효율적이다.
