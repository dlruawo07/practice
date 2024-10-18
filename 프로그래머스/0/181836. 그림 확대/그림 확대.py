def solution(picture, k):
    answer = []
    for i in picture:
        st = ''
        for a in i:
            st += a * k
        for a in range(k):
            answer.append(st)
    return answer