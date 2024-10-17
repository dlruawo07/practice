def solution(age):
    answer = ''
    arr = str(age)
    for i in arr:
        answer += chr(ord(i) + 49)
    return answer