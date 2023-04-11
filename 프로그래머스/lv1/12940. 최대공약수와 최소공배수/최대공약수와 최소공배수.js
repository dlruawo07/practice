function getGCD(n, m) {
    let gcd = 0;
    let small = n > m ? m : n;
    for (let i = 1; i <= small; i++) {
        if (n % i === 0 && m % i === 0)
            gcd = i;
    }
    return gcd;
}

function getLCM(n, m) {
    if (n % m === 0) return n;
    if (m % n === 0) return m;
    
    let gcd = getGCD(n, m);
    if (gcd !== 1) return n * m / gcd;
    return n * m;
}

function solution(n, m) {
    return [getGCD(n, m), getLCM(n, m)];
}