def solution(rsp):
    answer = ''
    for i in rsp:
        answer = answer + '0' if i == '2' else answer + '5' if i == '0' else answer + '2'
    return answer