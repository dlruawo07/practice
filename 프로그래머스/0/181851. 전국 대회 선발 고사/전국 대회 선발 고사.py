def solution(rank, attendance):
    arr = sorted([val for idx, val in enumerate(rank) if attendance[idx] is True])
    return 10000 * rank.index(arr[0]) + 100 * rank.index(arr[1]) + rank.index(arr[2])