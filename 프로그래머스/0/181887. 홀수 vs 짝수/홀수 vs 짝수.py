def solution(num_list):
    sum1 = sum(num_list[0:][::2])
    sum2 = sum(num_list[1:][::2])
    return max([sum1, sum2])