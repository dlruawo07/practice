def solution(a, b):
    ans1 = int(str(a) + str(b))
    ans2 = 2 * a * b
    if ans2 > ans1:
        return ans2
    return ans1