def solution(myString, pat):
    new_str = ''
    for i in range(len(myString)):
        if myString[i] == 'A':
            new_str += 'B'
        elif myString[i] == 'B':
            new_str += 'A'

    return 1 if pat in new_str else 0