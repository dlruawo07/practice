def solution(A, B):
    if A == B:
        return 0
    
    A_len = len(A)
    count = 0
    
    part = A
    
    for i in range(A_len + 1):
        part = part[-1] + part[:A_len-1]
        count += 1
        if part == B:
            break
            
    return -1 if part != B else count