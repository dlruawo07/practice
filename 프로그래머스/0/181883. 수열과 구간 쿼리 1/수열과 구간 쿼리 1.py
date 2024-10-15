def solution(arr, queries):
    answer = arr
    for i, j in queries:
        for a in range(i, j + 1):
            answer[a] += 1
    return answer