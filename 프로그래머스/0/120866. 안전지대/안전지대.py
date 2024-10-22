def solution(board):
    n = len(board)
    directions = [(-1, -1), (-1, 0), (-1, 1), 
                  (0, -1),         (0, 1), 
                  (1, -1), (1, 0), (1, 1)]

    danger_board = [[0] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                danger_board[i][j] = 1
                for di, dj in directions:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < n and 0 <= nj < n:
                        danger_board[ni][nj] = 1
    safe_count = 0
    for i in range(n):
        safe_count += danger_board[i].count(0)

    return safe_count