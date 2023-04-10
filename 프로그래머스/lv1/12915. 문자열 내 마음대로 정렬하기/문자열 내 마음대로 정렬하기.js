function solution(strings, n) {
  return strings
    .map((one) => one[n] + one)
    .sort()
    .map((one) => one.substr(1));
}