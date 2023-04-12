function solution(n, arr1, arr2) {
  let answer = [];
  let secret1 = arr1
    .map((ele) => ele.toString(2).padStart(n, "0"));
  let secret2 = arr2
    .map((ele) => ele.toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (secret1[i][j] === '1' || secret2[i][j] === '1') str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}
