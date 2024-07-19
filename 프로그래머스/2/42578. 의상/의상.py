def solution(clothes):
    dict = {}
    for clothe in clothes:
        dict[clothe[1]] = dict.get(clothe[1], 0) + 1
        answer = 1
        for category in dict:
            answer *= (dict[category] + 1)
    return answer - 1
