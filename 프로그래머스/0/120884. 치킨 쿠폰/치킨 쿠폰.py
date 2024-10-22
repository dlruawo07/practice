def solution(chicken):
    service_chicken = 0
    while chicken >= 10:
        new_service = chicken // 10
        service_chicken += new_service
        chicken = chicken % 10 + new_service
    return service_chicken