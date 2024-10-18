def solution(numbers):
    sorted_numbers = sorted(numbers)
    negneg = 0
    if sorted_numbers[0] < 0 and sorted_numbers[1]:
        negneg = sorted_numbers[0] * sorted_numbers[1]
    pospos = sorted_numbers[-1] * sorted_numbers[-2]
    
    return max(negneg, pospos)
        