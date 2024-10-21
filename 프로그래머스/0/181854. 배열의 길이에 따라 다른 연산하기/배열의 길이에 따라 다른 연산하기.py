def solution(arr, n):
    return [val + n if (len(arr) % 2 == 0 and idx % 2 != 0) or (len(arr) % 2 != 0 and idx % 2 == 0) else val for idx, val in enumerate(arr)]