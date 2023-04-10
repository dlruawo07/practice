function solution(answers) {
  var answer = [];

  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let ans = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    ans[0] += answers[i] === arr1[i % arr1.length] ? 1 : 0;
    ans[1] += answers[i] === arr2[i % arr2.length] ? 1 : 0;
    ans[2] += answers[i] === arr3[i % arr3.length] ? 1 : 0;
  }

  for (let i = 0; i < ans.length; i++)
    if (ans[i] === Math.max(...ans)) answer.push(i + 1);

  return answer;
}