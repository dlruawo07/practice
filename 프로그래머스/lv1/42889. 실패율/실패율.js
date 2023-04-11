function solution(N, stages) {
  let answer = [];
  let arr = [];
  stages.sort((a, b) => a - b);
  for (let i = 1; i < N + 1; i++) {
    let count = stages.filter((ele) => ele === i).length;
    arr.push([i, count / stages.length]);
    stages.splice(stages.indexOf(i), count);
  }
  arr.sort((a, b) => b[1] - a[1]);
  for (let ele of arr) answer.push(ele[0]);
  return answer;
}