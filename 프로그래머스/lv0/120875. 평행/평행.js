function getIncline(a, b) {
    y = b[1] - a[1];
    x = b[0] - a[0];
    return (y / x);
}

function solution(dots) {
    var answer = 0;
    
    for (let i = 1; i < dots.length; i++) {
        let arr = [];
        let newDots = [...dots];
            
        arr.push(getIncline(dots[0], dots[i]))

        newDots.splice(0, 1);
        newDots.splice(i - 1, 1);
        arr.push(getIncline(newDots[0], newDots[1]));

        if (arr.length !== new Set(arr).size) return 1;
        arr = []
    }
    return answer;
}
