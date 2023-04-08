function solution(n) {
  var answer = 0;
  let temp = n;
  let ternaryStr = "";
  for (; temp / 3 !== 0; temp = Math.floor(temp / 3))
    ternaryStr += temp % 3;
  for (let i = ternaryStr.length - 1; i >= 0; i--)
    answer += Number(ternaryStr[ternaryStr.length - 1 - i]) * Math.pow(3, i);
  return answer;
}

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
