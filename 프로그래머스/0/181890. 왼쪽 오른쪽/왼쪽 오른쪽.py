def solution(str_list):
    l = 21
    r = 21
    
    for i, v in enumerate(str_list):
        if v == "l" and l == 21:
            l = i
        if v == "r" and r == 21:
            r = i
            
    if l < r:
        return str_list[:l]
    elif r < l:
        return str_list[r + 1:]
    else:
        return []