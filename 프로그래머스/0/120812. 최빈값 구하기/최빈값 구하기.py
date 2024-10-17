from collections import Counter

def solution(array):
    count = Counter(array)
    
    max_frequency = max(count.values())
    
    most_frequent = [key for key, freq in count.items() if freq == max_frequency]
    
    return most_frequent[0] if len(most_frequent) == 1 else -1
    