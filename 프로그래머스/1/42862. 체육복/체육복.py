def safe_index(lst, element):
  try:
    return lst.index(element)
  except ValueError:
    return -1


def solution(n, lost, reserve):
    new_lost = sorted(lost)
    borrowed = 0
    for i in range(len(lost)):
        if lost[i] in reserve:
            reserve.pop(reserve.index(lost[i]))
            new_lost.pop(new_lost.index(lost[i]))
            borrowed += 1
    for e in new_lost:
        if e in reserve:
            borrowed += 1
        before = safe_index(reserve, e - 1)
        if len(reserve) == 0:
            break
        if before != -1:
            borrowed += 1
            reserve.pop(before)
        else:
            after = safe_index(reserve, e + 1)
            if after != -1:
                borrowed += 1
                reserve.pop(after)
    return n - len(lost) + borrowed