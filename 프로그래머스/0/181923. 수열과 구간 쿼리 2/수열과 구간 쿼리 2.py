def solution(arr, queries):
    answer = []
    for query in queries:
        new_arr = []
        for i in range(query[0], query[1] + 1):
            if arr[i] > query[2]:
                new_arr.append(arr[i])
        if not new_arr:
            answer.append(-1)
        else:
            answer.append(min(new_arr))
    return answer