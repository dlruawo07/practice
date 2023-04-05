function solution(cards1, cards2, goal) {
  var answer = "";
  var i = 0;
  var one = 0;
  var two = 0;
  while (i < goal.length) {
    if (cards1[one] === goal[i]) {
      one++;
      i++;
    } else if (cards2[two] === goal[i]) {
      two++;
      i++;
    } else return "No";
  }
  return "Yes";
}