function getMultiples(number) {
  let result = 0;
  let sqrt = Math.floor(Math.sqrt(number));
  if (sqrt == Math.sqrt(number)) result = -1;
  for (let i = 1; i <= sqrt; i++) {
    if (number % i == 0) result += 2;
  }
  return result;
}

function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++)
    answer += getMultiples(i) > limit ? power : getMultiples(i);
  return answer;
}
