function solution(price, money, count) {
    const sum = price * (count * (count + 1) / 2);
    const diff = sum - money;
    return (diff > 0) ? diff : 0;
}

// 기존 코드
// function solution(price, money, count) {
//     let sum = 0;
//     for (let i = 1; i <= count; i++) sum += price * i;
//     return (sum > money) ? sum - money : 0;
// }

// 지피티 추천 코드는 for문을 사용하는 것이 아니라
// 등차수열의 합 공식을 사용했기 때문에 더 빠르다.
