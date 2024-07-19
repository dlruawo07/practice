def press_count(target):
    dist1 = ord(target) - ord('A')
    dist2 = ord('Z') - ord(target) + 1
    return min(dist1, dist2)

def solution(name):
    total_moves = sum(press_count(c) for c in name)
    
    length = len(name)
    
    min_move = length - 1
    for i in range(length):
        next_index = i + 1
        while next_index < length and name[next_index] == 'A':
            next_index += 1
        distance = min(i, length - next_index)
        min_move = min(min_move, i + length - next_index + distance)
    
    total_moves += min_move
    return total_moves