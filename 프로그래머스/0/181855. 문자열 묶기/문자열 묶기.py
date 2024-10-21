def solution(strArr):
    dict = {}
    for i in strArr:
        str_len = len(i)
        dict[str_len] = dict.get(str_len, 0) + 1
        
    return max(dict.values())