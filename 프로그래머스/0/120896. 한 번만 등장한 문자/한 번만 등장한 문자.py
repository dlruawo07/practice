def solution(s):
    arr = []
    dic = {}
    for i in s:
        if i in dic:
            dic[i] += 1
        else:
            dic[i] = 1
    min_val = min(dic.values())
    min_vals = [key for key, value in dic.items() if value == min_val]
    return ''.join(sorted(min_vals))