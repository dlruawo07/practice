import math

def solution(brown, yellow):
    sum = brown + yellow
    factors = []
    for i in range(2, sum + 1):
        if sum % i == 0:
            factors.append(i)
    print(factors)
    for h in factors:
        w = int(sum/h)
        if (h-2) * (w-2) == yellow:
            return [w, h]