def solution(n):
    return [i for i in range(1, 186) if i % 3 != 0 and '3' not in str(i)][n - 1]
