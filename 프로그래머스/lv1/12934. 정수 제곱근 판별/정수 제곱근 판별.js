function solution(n) {
    let sqrtInt = Math.floor(Math.sqrt(n));
    return (sqrtInt == Math.sqrt(n)) ? Math.pow(sqrtInt + 1, 2) : -1;
}