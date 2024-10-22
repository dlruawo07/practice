import math

def solution(score):
    average = [sum(i) / 2 for i in score]
    answer = [sorted(average, reverse=True).index(i) + 1 for i in average]
    return answer