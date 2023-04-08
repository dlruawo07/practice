function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") count++;
        if (s[i] === "y" || s[i] === "Y") count--;
    }
    return count === 0;
}