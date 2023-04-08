function solution(n) {
    let squareRoot = Math.sqrt(n);
    return (squareRoot === parseInt(squareRoot)) ? Math.pow(squareRoot + 1, 2) : -1;
    // let sqrt = Math.floor(Math.sqrt(n));
    // return (sqrtInt == Math.sqrt(n))) ? Math.pow(sqrtInt + 1, 2)) : -1;
}