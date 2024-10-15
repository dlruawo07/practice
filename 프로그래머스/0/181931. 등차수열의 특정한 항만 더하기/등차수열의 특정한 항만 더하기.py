def solution(a, d, included):
    answer = 0
    for i in range(len(included)):
        if included[i] == True:
            answer += a if i == 0 else a + d * i
    return answer