def solution(my_string):
    return sorted([int(val) for val in my_string if str.isdigit(val)])