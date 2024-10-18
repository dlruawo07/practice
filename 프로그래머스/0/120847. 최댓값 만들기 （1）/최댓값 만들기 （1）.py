def solution(numbers):
    return sorted(numbers, reverse=True)[0] * sorted(numbers, reverse=True)[1]