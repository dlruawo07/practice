from itertools import permutations
import math

def is_prime(num):
    sqrt_num = math.sqrt(num)
    if sqrt_num.is_integer():
        return False
    return all(num % i != 0 for i in range(2, num // 2 + 1))


def solution(numbers):
    result = set()
    str_numbers = list(numbers)
    for i in range(1, len(str_numbers) + 1):
        for perm in permutations(str_numbers, i):
            number = int(''.join(perm))
            if is_prime(number):
                result.add(number)

    return len(result)