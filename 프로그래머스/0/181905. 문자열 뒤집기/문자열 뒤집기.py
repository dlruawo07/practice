def solution(my_string, s, e):
    answer = ''
    start = my_string[:s]
    middle = my_string[s:e+1]
    end = my_string[e+1:]
    
    return start + middle[::-1] + end
