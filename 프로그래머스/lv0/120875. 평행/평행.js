function getIncline(a, b) {
    y = b[1] - a[1];
    x = b[0] - a[0];
    return (y / x);
}

function solution(dots) {
    var answer = 0;
    
    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let arr = [];
            let idx = [0, 1, 2, 3];
            arr.push(getIncline(dots[i], dots[j]))
            idx.splice(i, 1);
            idx.splice(j-1, 1); // i가 빠지면 [1, 2, 3]이 되는데 이 상태에서 j(1)를 빼면 2가 빠지네요.
            arr.push(getIncline(dots[idx[0]], dots[idx[1]]));
            if (arr.length !== new Set(arr).size)
                return 1;
            arr = []
        }
        break;
    }
    
    return answer;
}