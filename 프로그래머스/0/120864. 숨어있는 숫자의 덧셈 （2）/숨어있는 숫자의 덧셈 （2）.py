import re

def solution(my_string):
    return sum([int(num) for num in re.sub(r'[a-zA-Z]', ',', my_string).split(',') if num])
