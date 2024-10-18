def solution(sides):
    mx = max(sides)
    two_sides = sorted(sides.copy())
    two_sides.pop()
    return 1 if mx < sum(two_sides) else 2