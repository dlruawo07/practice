def solution(arr):
    answer = []
    for idx, val in enumerate(arr):
        if answer and answer[-1] == val:
            answer.pop()
        elif not answer or answer and answer[-1] != val:
            answer.append(val)
    return [-1] if not answer else answer