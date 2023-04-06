function solution(food) {
  var answer = "0";
  for (let i = 1; i < food.length; i++) {
    let s = String(food.length - i).repeat(
      Math.floor(food[food.length - i]) / 2
    );
    answer = s + answer + s;
  }
  return answer;
}
