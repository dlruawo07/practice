function getIncline(a, b) {
    y = b[1] - a[1]
    x = b[0] - a[0]
    return (y / x);
}

function solution(dots) {
    var answer = 0;
    let arr = [];
    arr.push(getIncline(dots[0], dots[1]));
    arr.push(getIncline(dots[2], dots[3]));
    if (arr.length !== new Set(arr).size)
        answer = 1;
    arr = []
    
    arr.push(getIncline(dots[0], dots[2]));
    arr.push(getIncline(dots[1], dots[3]));
    if (arr.length !== new Set(arr).size)
        answer = 1;
    arr = []
    
    arr.push(getIncline(dots[0], dots[3]));
    arr.push(getIncline(dots[1], dots[2]));
    if (arr.length !== new Set(arr).size)
        answer = 1;
    
    // for (let i = 0; i < dots.length - 1; i++) {
    //     for (let j = i + 1; j < dots.length; j++) {
    //         arr.push(getIncline(dots[i], dots[j]))
    //     }
    // }
    // 0,1 2,3        0,2 1,3         0,3 1,2
    // let set = new Set(arr);
    // if (set.size !== arr.length)
    //     answer++;
    
    return answer;
}