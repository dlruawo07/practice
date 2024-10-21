def solution(arr, k):
    answer = []
    for i in arr:
        if i not in answer:
            answer.append(i)
    return answer[:k] + [-1] * (k - len(answer))
