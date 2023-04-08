function solution(n) {
  var answer = 0;
  let temp = n;
  let ternaryStr = "";
  for (; temp / 3 !== 0; temp = Math.floor(temp / 3)) {
    ternaryStr += temp % 3;
  }

  //   let ternaryInt = Number(ternaryStr);

  //   for (
  //     let n = 0;
  //     ternaryInt !== 0;
  //     ternaryInt = Math.floor(ternaryInt / 10), n++
  //   ) answer += (ternaryInt % 10) * Math.pow(3, n);

  for (let i = ternaryStr.length - 1; i >= 0; i--) {
    answer += Number(ternaryStr[ternaryStr.length - 1 - i]) * Math.pow(3, i);
  }
  return answer;
}

function solution2(n) {
  let answer = 0;
  // 3진법    n.toString(3)
  // 3진수 -> 10진법 : parseInt(n, 3)
  let n3 = n.toString(3).split("").reverse().join("");
  answer = parseInt(n3, 3);
  return answer;
  //   return parseInt(n.toString(3).split("").reverse().join(""), 3);
}