function solution(x) {
    let sum = 0;
    let temp = x;
    for (let i = 0; i < String(x).length; i++) {
        sum += Math.floor(temp % 10);
        temp /= 10;
    }
    return (x % sum == 0) ? true : false;
}