function solution(array, commands) {
    let answer = [];
    for (let cmd of commands) {
        answer.push(
            array.slice(cmd[0] - 1, cmd[1])
                .sort((a, b) => a - b)[cmd[2] - 1]
        );
    }
    return answer;
}