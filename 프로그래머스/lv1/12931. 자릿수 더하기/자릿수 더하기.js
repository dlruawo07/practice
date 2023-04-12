function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur, i) => acc + Number(cur), 0);
}