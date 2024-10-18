def solution(spell, dic):
    spell2 = ''.join(sorted(spell))
    for i in dic:
        if spell2 in ''.join(sorted([x for x in i])):
            return 1
    return 2
    