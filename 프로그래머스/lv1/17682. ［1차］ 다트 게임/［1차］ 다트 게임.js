function solution(dartResult) {
  let s = dartResult;
  let nPos = 0;
  let score = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "S") score.push(Number(s.substring(nPos, i)));
    else if (s[i] === "D") score.push(Number(s.substring(nPos, i)) ** 2);
    else if (s[i] === "T") score.push(Number(s.substring(nPos, i)) ** 3);
    else if (s[i] === "*") {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;

    } else if (s[i] === "#") score[score.length - 1] *= -1;
    else continue;
    nPos = i + 1;
  }

  return score.reduce((acc, cur) => acc + cur, 0);
}