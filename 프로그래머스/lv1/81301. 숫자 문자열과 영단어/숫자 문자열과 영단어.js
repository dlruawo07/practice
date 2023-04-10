function solution(s) {
  let answer = s;

  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++)
    answer = answer.replaceAll(arr[i], String(i));

  return Number(answer);
}