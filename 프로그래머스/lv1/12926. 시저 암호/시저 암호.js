function isLowerCase(s) {
    return s >= 'a' && s <= 'z';
}

function isUpperCase(s) {
    return s >= 'A' && s <= 'Z';
}

function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        let newAscii = s.charCodeAt(i) + n;
        if ((isLowerCase(s[i]) && newAscii > 122) || (isUpperCase(s[i]) && newAscii > 90))
            newAscii -= 26;
        if ((newAscii >= 65 && newAscii <= 90) || (newAscii >= 97 && newAscii <= 122))
            answer += String.fromCharCode(newAscii);
        else answer += s[i];
    }
    return answer;
}