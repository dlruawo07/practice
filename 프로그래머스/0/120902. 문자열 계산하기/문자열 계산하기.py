def solution(my_string):
    answer = 0
    eq = my_string.split(' ')
    answer = int(eq[0])
    for idx, val in enumerate(eq):
        if val == '+':
            answer += int(eq[idx + 1])
        elif val == '-':
            answer -= int(eq[idx + 1])
    return answer