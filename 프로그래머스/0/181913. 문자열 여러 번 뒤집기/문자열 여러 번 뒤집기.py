def solution(my_string, queries):
    answer = my_string
    for i, j in queries:
        before = answer[:i]
        to_swap = answer[i:j+1]
        after = answer[j+1:]

        after_swap = to_swap[::-1]
        
        answer = before + after_swap + after
    return answer