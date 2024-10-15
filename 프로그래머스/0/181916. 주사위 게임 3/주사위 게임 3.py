def three_equal(numbers):
    p = next(number for number in numbers if numbers.count(number) == 3)
    q = next(x for x in numbers if x != p)
    return (10 * p + q) ** 2

        
def two_equal(numbers, list_counts):
    if list_counts == [2, 2]:
        unique_numbers = list(set(numbers))
        return (unique_numbers[0] + unique_numbers[1]) * abs(unique_numbers[0] - unique_numbers[1])
    else:
        for i in range(4):
            for j in range(i + 1, 4):
                if numbers[i] == numbers[j]:
                    remaining = [x for k, x in enumerate(numbers) if k != i and k != j]
                    return remaining[0] * remaining[1]

def solution(a, b, c, d):
    
    numbers = [a, b, c, d]
    list_counts = list({number: numbers.count(number) for number in set(numbers)}.values())
        
    if 1 and 3 in list_counts:
        return three_equal(numbers)
    if 2 in list_counts:
        return two_equal(numbers, list_counts)
    if len(set(numbers)) == 4:
        return min(numbers)
    elif len(set(numbers)) == 1:
        return 1111 * a
    

    
    
    