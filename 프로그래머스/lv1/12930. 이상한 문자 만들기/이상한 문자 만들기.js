function solution(s) {
  var answer = "";
  const sArr = s.split(" ");
  for (let i = 0; i < sArr.length; i++) {
    if (i !== 0) answer += " ";
    for (let j = 0; j < sArr[i].length; j++) {
      if (j % 2 === 0) answer += sArr[i][j].toUpperCase();
      else if (j % 2 !== 0) answer += sArr[i][j].toLowerCase();
    }
  }
  return answer;
}