def solution(my_string, is_suffix):
    strings = []
    for i in range(len(my_string)):
        strings.append(my_string[i:])
    return 1 if is_suffix in strings else 0
