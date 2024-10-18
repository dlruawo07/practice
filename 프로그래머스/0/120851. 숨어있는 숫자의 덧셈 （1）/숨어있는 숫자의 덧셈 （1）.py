def solution(my_string):
    return sum([int(val) for val in my_string if str.isdigit(val)])