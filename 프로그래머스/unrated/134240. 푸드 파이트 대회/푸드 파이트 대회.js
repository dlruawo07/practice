function solution(food) {
    var answer = '';
    let temp = '';
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2))
        temp += String(food.length - i).repeat(Math.floor(food[food.length - i]) / 2)
    }
    return answer+0+temp;
}