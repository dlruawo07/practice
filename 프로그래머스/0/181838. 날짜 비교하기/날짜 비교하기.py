def solution(date1, date2):
    if date1 == date2:
        return 0
    if date2[0] < date1[0]:
        return 0
    if date2[0] == date1[0] and date2[1] < date1[1]:
        return 0
    if date2[0] ==  date1[0] and date2[1] == date1[1] and date2[2] < date1[2]:
        return 0
    return 1