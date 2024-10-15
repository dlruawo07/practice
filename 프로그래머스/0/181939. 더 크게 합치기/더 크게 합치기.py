def solution(a, b):
    answer = 0
    ans1 = int(str(a) + str(b))
    ans2 = int(str(b) + str(a))
    if ans1 < ans2:
        return ans2
    return ans1