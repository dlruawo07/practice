def solution(emergency):
    sorted_emergency = sorted(emergency, reverse=True)
    order = []
    for value in emergency:
        order.append(sorted_emergency.index(value) + 1)
        
    return order