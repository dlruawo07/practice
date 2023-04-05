function solution(name, yearning, photo) {
    var answer = [];
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let j = 0; j < name.length; j++) {
            if (photo[i].indexOf(name[j]) !== -1)
                sum += yearning[j];
        }
        answer.push(sum);
    }
    return answer;
}