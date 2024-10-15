def solution(num_list):
    sum = 0
    product = 1
    for i in range(len(num_list)):
        sum += num_list[i]
        product *= num_list[i]
    return 1 if product < sum ** 2 else 0