function solution(numbers) {
  var answer = new Set();
  let _numbers = [...numbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(_numbers[i] + _numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}