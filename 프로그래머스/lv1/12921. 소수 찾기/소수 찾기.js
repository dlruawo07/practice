function isPrime(n) {
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    return answer;
}