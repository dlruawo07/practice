def solution(num_list):
    sum1 = ''
    sum2 = ''
    for i in range(len(num_list)):
        if num_list[i] % 2 == 1:
            sum1 += str(num_list[i])
        else:
            sum2 += str(num_list[i])
            
    return int(sum1) + int(sum2)