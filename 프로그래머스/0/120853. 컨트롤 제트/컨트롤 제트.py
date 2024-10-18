def solution(s):
    arr = s.split(' ')
    answer = int(arr[0])
    for i in range(1, len(arr)):
        if arr[i] == 'Z':
            answer -= int(arr[i - 1])
            continue
        answer += int(arr[i])
    return answer
    