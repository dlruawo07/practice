function solution(n, arr1, arr2) {
  let answer = [];
  let secret1 = arr1
    .map((ele) => ele.toString(2).replaceAll("0", " ").replaceAll("1", "#").padStart(n, " "));

  let secret2 = arr2
    .map((ele) => ele.toString(2).replaceAll("0", " ").replaceAll("1", "#").padStart(n, " "));

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (secret1[i][j] === "#" || secret2[i][j] === "#") str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}
