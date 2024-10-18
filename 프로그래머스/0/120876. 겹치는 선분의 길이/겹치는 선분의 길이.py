def solution(lines):
    arr = [0] * 201
    
    for line in lines:
        for i in range(line[0], line[1]):
            arr[i] += 1
    
    return sum(1 for i in arr if i > 1)