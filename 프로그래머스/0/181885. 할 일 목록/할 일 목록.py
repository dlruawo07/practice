def solution(todo_list, finished):
    answer = []
    for i, v in enumerate(todo_list):
        if finished[i] == False:
            answer.append(v)
    return answer