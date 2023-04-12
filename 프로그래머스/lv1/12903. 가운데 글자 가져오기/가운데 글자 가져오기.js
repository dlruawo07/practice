function solution(s) {
    return (s.length % 2 === 0) ? s.substring(s.length / 2 - 1, s.length / 2 + 1) : s[Math.floor(s.length / 2)];
}

// chatGPT 의견: substr은 MDN에서 권장하지 않는 메서드이므로 substring을 권장한다.
