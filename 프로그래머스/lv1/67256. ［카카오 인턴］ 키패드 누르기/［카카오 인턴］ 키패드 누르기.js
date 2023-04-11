function onLeft(n) {
  return [1, 4, 7, 10].indexOf(n);
}

function onMiddle(n) {
  return [2, 5, 8, 0].indexOf(n);
}

function onRight(n) {
  return [3, 6, 9, 11].indexOf(n);
}

function getDist(curr, prev, func) {
  if (prev === -1) return -1;
  if (func(prev) !== -1) return Math.abs(onMiddle(curr) - func(prev)) + 1;
  else if (onMiddle(prev) !== -1)
    return Math.abs(onMiddle(curr) - onMiddle(prev));
}

function solution(numbers, hand) {
  let answer = "";
  let prevLeft = 10;
  let prevRight = 11;
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
      } else if (prevLeft === -1 || prevRight === -1) {
        answer += prevLeft === -1 ? "R" : "L";
        prevLeft === -1 ? (prevRight = curr) : (prevLeft = curr);
      } else if (distFromLeft < distFromRight) {
        answer += "L";
        prevLeft = curr;
      } else if (distFromLeft > distFromRight) {
        answer += "R";
        prevRight = curr;
      }
    }
  }
  return answer;
}