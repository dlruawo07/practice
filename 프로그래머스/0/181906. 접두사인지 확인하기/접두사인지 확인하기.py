def solution(my_string, is_prefix):
    answer = 0
    strings = []
    
    for i in range(len(my_string) - 1, 0, -1):
        strings.append(my_string[:i])
        
    return 1 if is_prefix in strings else 0