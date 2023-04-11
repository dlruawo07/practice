const onLeft = (n) => [1, 4, 7, 10].indexOf(n);
const onMiddle = (n) => [2, 5, 8, 0].indexOf(n);
const onRight = (n) => [3, 6, 9, 12].indexOf(n);

function getDist(curr, prev, func) {
  if (func(prev) !== -1) return Math.abs(onMiddle(curr) - func(prev)) + 1;
  else if (onMiddle(prev) !== -1)
    return Math.abs(onMiddle(curr) - onMiddle(prev));
}

function solution(numbers, hand) {
  let answer = "";
  let prevLeft = 10;
  let prevRight = 12;
  for (let curr of numbers) {
    if (onLeft(curr) !== -1) {
      answer += "L";
      prevLeft = curr;
    } else if (onRight(curr) !== -1) {
      answer += "R";
      prevRight = curr;
    } else {
      let distFromLeft = getDist(curr, prevLeft, onLeft);
      let distFromRight = getDist(curr, prevRight, onRight);

      if (distFromLeft === distFromRight) {
        answer += hand[0].toUpperCase();
        hand[0] === "r" ? (prevRight = curr) : (prevLeft = curr);
      } else if (distFromLeft < distFromRight) {
        answer += "L";
        prevLeft = curr;
      } else {
        answer += "R";
        prevRight = curr;
      }
    }
  }
  return answer;
}
