def only_zero_five(n):
    num_str = str(n)
    for digit in num_str:
        if digit != "5" and digit != "0":
            return False
    return True

def solution(l, r):
    answer = []
    for i in range(l, r + 1):
        if only_zero_five(i) == True:
            answer.append(i)
            
    if not answer:
        answer.append(-1)
    return answer