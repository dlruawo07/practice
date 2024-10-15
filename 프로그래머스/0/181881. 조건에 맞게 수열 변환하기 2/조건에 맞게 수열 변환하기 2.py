def solution(arr):
    answer = 0
    prev_arr = []
    new_arr = arr.copy()
    
    while True:
        prev_arr = new_arr.copy()
        for i, v in enumerate(prev_arr):
            if v >= 50 and v % 2 == 0:
                new_arr[i] /= 2
            elif v < 50 and v % 2 == 1:
                new_arr[i] = new_arr[i] * 2 + 1
        if prev_arr == new_arr:
            break
        answer += 1
    return answer