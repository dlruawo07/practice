def solution(arr):
    size = 1
    while size < len(arr):
        size *= 2
    return arr + [0] * (size - len(arr))