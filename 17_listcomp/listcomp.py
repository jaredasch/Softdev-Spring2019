# Ricky Lin & Jared Asch
# SoftDev2 pd06
# K #17: PPFTLCW
# 2019-04-12 F

def oneLoop():
    l = []
    for i in range(0, 10, 2):
        l.append(str(i) * 2)
    return l

def oneComp():
    return [str(i) * 2 for i in range(0,10,2)]

print(oneLoop()) #expect ['00', '22', '44', '66', '88']
print(oneComp())

def twoLoop():
    l = []
    for i in range(7, 57, 10):
        l.append(i)
    return l

def twoComp():
    return [i for i in range(7,57,10)]

print(twoLoop()) #expect [7, 17, 27, 37, 47]
print(twoComp())

def threeLoop():
    l = []
    for i in range(0, 9):
        l.append((i % 3) * int(i / 3))
    return l

def threeComp():
    return [ (i % 3) * int(i / 3) for i in range(0,9)]

print(threeLoop()) #expect [0, 0, 0, 0, 1, 2, 0, 2, 4]
print(threeComp())

def fourLoop():
    l = []
    for i in range(2, 101):
        sum = 0
        for j in range(2, i):
            if i % j == 0:
                l.append(i)
                break
    return l

def fourComp():
    return [i for i in range(2, 101) if sum([1 if i % j == 0 else 0 for j in range(2, i)]) > 0]

print(fourLoop()) #expect [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100]
print(fourComp())

def fiveLoop():
    l = []
    for i in range(2, 101):
        sum = 0
        for j in range(2, i):
            if i % j == 0:
                sum += 1
        if sum == 0:
            l.append(i)
    return l
    
def fiveComp():
    return [i for i in range(2, 101) if sum([1 if i % j == 0 else 0 for j in range(2, i)]) == 0]

print(fiveLoop()) #expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
print(fiveComp())

def sixLoop(num):
    l = []
    for i in range(1, num + 1):
        if num % i == 0:
            l.append(i)
    return l
    
def sixComp(num):
    return [i for i in range(1, num + 1) if num % i == 0]

print(sixLoop(6)) #expect [1, 2, 3, 6] 
print(sixComp(6))

def sevenLoop(mat):
    l = []
    for j in range(0, len(mat[0])):
        row = []
        for i in range(0, len(mat)):
            row.append(mat[i][j])
        l.append(row)
    return l

def sevenComp(mat):
    return [[mat[i][j] for i in range(0, len(mat))] for j in range(0, len(mat[0]))]

m = [[0, 1, 2, 3],
     [4, 5, 6, 7]]

print(sevenLoop(m)) #expect [[0, 4], [1, 5], [2, 6], [3, 7]]
print(sevenComp(m))
