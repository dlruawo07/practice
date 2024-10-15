def solution(num_list):
    answer = num_list
    last = num_list[-1]
    prev = num_list[-2]
    
    if last > prev:
        answer.append(last - prev)
    else:
        answer.append(last * 2)
    
    return answer