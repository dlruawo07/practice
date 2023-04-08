function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") count++;
        if (s[i] === "y" || s[i] === "Y") count--;
    }
    return count === 0;
}

function solution(s) {
    let sp = s.toLowerCase().replace(/p/g, '0').split('').filter(e => e === '0').length;
    let sy = s.toLowerCase().replace(/y/g, '1').split('').filter(e => e === '1').length;

    return sp === sy;
}
