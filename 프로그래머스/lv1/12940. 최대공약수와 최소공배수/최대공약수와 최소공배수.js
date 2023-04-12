function getGCD(n, m) {
    let temp;
    while (m !== 0) {
        temp = n % m;
        n = m;
        m = temp;
    }
    return n;
}

function getLCM(n, m) {
    if (n % m === 0) return n;
    if (m % n === 0) return m;
    
    let gcd = getGCD(n, m);
    return n * m / gcd;
}

function solution(n, m) {
    return [getGCD(n, m), getLCM(n, m)];
}