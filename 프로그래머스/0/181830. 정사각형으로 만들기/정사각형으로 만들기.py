def solution(arr):
    col = len(arr)
    row = len(arr[0])
    
    if col == row:
        return arr
    if col > row:
        for i in arr:
            diff = col - row
            while diff - 1 >= 0:
                i.append(0)
                diff -= 1
    else:
        diff = row - col
        while diff - 1 >= 0:
            arr.append([0] * row)
            diff -= 1
    return arr