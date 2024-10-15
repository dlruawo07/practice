def solution(arr):
    two = [i for i, val in enumerate(arr) if val == 2]
    if not two:
        return [-1]
    elif len(two) == 1:
        return [2]
    return arr[two[0]:two[-1] + 1]
