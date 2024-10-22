def solution(sides):
    count = 0
    
    longer = max(sides)
    shorter = min(sides)
    
    for i in range(longer, 0, -1):
        if shorter + i <= longer:
            break
        count += 1
    
    for i in range(longer + 1, longer + shorter):
        count += 1
        
    return count