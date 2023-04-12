function solution(answers) {
  var answer = [];

  const firstArr = [1, 2, 3, 4, 5];
  const secondArr = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let correct = [0, 0, 0];

  let firstIndex = 0;
  let secondIndex = 0;
  let thirdIndex = 0;
    
  answers.forEach((answer, index) => {
    if (answer === firstArr[firstIndex]) correct[0]++;
    if (answer === secondArr[secondIndex]) correct[1]++;
    if (answer === thirdArr[thirdIndex]) correct[2]++;
      
    firstIndex = (firstIndex + 1) % firstArr.length;
    secondIndex = (secondIndex + 1) % secondArr.length;
    thirdIndex = (thirdIndex + 1) % thirdArr.length;
  });
    
  const max = Math.max(...correct);
  correct.forEach((score, i) => {
    if (score === max) answer.push(i + 1);              
  })
  
  return answer;
}
