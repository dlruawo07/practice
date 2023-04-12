function solution(price, money, count) {
    const sum = price * (count * (count + 1) / 2);
    const diff = sum - money;
    return (diff > 0) ? diff : 0;
}