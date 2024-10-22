def solution(numbers, k):
    answer = 0
    i = 0
    for j in range(k):
        answer = numbers[i]
        i += 2
        if i >= len(numbers):
            i -= len(numbers)
    return answer