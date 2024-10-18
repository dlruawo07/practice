from collections import deque

def solution(numbers, direction):
    end = len(numbers) - 1
    return numbers[-1:] + numbers[:-1] if direction == "right" else numbers[1:] + numbers[:1]
        