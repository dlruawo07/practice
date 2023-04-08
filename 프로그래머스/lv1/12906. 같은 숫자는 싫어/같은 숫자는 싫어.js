function solution(arr) {
    return arr.filter((ele, i, array) => ele !== array[i - 1]);
}
