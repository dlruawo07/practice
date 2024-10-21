def solution(arr, flag):
    answer = []
    for idx, val in enumerate(arr):
        if flag[idx] == True:
            answer.extend([val] * (val * 2))
        else:
            for i in range(val):
                answer.pop()
    return answer