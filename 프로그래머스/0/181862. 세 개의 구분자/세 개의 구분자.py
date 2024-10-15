def solution(myStr):
    delimiters = ["a", "b", "c"]
    
    for delimiter in delimiters:
        myStr = " ".join(myStr.split(delimiter))
    
    return ["EMPTY"] if not myStr.strip().split() else myStr.strip().split()
