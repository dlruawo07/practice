str = input()

for i in range(len(str)):
    if str[i].isupper():
        print(str[i].lower(), end='')
    else:
        print(str[i].upper(), end='')