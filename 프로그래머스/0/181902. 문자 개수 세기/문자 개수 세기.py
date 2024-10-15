def solution(my_string):
    dict = { chr(i): 0 for i in range(65, 91)}
    dict.update({ chr(i): 0 for i in range(97, 123)})
    
    for i in range(len(my_string)):
        dict[my_string[i]] += 1
        
    return list(dict.values())