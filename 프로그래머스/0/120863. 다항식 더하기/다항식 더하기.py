def solution(polynomial):
    xs = 0
    nums = 0
    equation = [i for i in polynomial.split(' ') if i != '+']
    for i in equation:
        if i == 'x':
            xs += 1
        elif 'x' in i:
            xs += int(i[:-1])
        else:
            nums += int(i)

    answer = str(xs) + 'x' if xs > 1 else 'x' if xs == 1 else ''
    if nums > 0:
        answer = answer + ' + ' + str(nums) if answer else str(nums)
    return answer