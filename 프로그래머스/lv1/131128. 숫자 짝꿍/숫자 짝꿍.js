function solution(X, Y) {
  let Xarr = new Array(10).fill(0);
  let Yarr = new Array(10).fill(0);

  let answer = "";

  X.split("").forEach((ele) => Xarr[ele]++);
  Y.split("").forEach((ele) => Yarr[ele]++);

  for (let i in Xarr) {
    if (Xarr[i] === 0 && Yarr[i] === 0) continue;
    answer += String(i).repeat(Math.min(Xarr[i], Yarr[i]));
  }
  if (answer.length === 0) return "-1";
  if (answer === "0".repeat(answer.length)) return "0";
  return answer.split("").sort().reverse().join("");
}