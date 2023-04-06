function solution(food) {
    var answer = '0';
    for (let i = food.length - 1; i >= 1; i--) {
        let s = String(i).repeat(Math.floor(food[i]) / 2)
        answer = s + answer + s;
    }
    return answer;
}
