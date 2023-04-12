function solution(array, commands) {
    return commands.map(([from, to, index]) =>
        array.slice(from - 1, to).sort((a, b) => a - b)[index - 1]
    );
}