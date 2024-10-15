def solution(arr):
    stk = []
    
    i = 0
    while True:
        if not stk:
            stk.append(arr[i])
            i += 1
        elif stk and stk[-1] < arr[i]:
            stk.append(arr[i])
            i += 1
        elif stk and stk[-1] >= arr[i]:
            stk.pop()
            
        if i == len(arr):
            break
        
    return stk