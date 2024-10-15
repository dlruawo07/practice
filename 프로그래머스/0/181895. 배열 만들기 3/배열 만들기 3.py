def solution(arr, intervals):
    answer = []
    for i, j in intervals:
        for i in range(i, j + 1):
            answer.append(arr[i])
    return answer