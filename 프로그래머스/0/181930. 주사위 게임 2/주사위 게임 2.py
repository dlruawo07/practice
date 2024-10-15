def solution(a, b, c):
    answer = a + b + c
    if a == b == c:
        return answer * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    if (a == b and b != c) or (a == c and b != c) or (b == c and a != c):
        return answer * (a ** 2 + b ** 2 + c ** 2)
    return answer