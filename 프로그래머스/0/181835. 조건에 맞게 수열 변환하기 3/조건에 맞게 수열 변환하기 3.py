def solution(arr, k):
    return [x * k if k % 2 == 1 else x + k for x in arr]