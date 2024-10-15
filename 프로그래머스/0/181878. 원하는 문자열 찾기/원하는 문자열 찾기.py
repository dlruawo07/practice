def solution(myString, pat):
    answer = 0
    lower_myString = myString.lower()
    lower_pat = pat.lower()
    return 1 if lower_pat in lower_myString else 0
