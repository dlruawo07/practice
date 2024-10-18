def solution(my_string, num1, num2):
    str_arr = [i for i in my_string]
    str_arr[num1], str_arr[num2] = str_arr[num2], str_arr[num1]
    return ''.join(str_arr)