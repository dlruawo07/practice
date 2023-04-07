function solution(participant, completion) {
    let answer = '';
    const hashMap = {};
    for (let comp of completion) {
        if (hashMap[comp]) hashMap[comp] += 1
        else hashMap[comp] = 1
    }
    
    for (let part of participant) {
        if (!hashMap[part]) answer = part;
        hashMap[part]--;
    }
    
    return answer;
}
