def solution(quiz):
    answer = []
    for x in quiz:
        [a, op, b, _, res] = x.split(' ')
        check = int(a) + int(b) if op == '+' else int(a) - int(b)
        answer.append('O' if check == int(res) else 'X')
    return answer