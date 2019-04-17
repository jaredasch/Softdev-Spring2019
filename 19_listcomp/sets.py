def union(set1, set2):
    '''Returns union of two sets'''
    result = [x for x in set2 if x not in set1] + [x for x in set1]
    return result
    
print("Testing union")
print( union([1,2,3], [2,3,4]) )
print( union([1,2,3], [4,5,6]) )


def intersection(set1, set2):
    '''Returns intersection of two sets'''
    result = [x for x in set1 if x in set2]
    return result

print("Testing intersection")
print( intersection([1,2,3],[2,3,4]) )
print( intersection([1,2,3],[4,5,6]) )

def setDifference(U,A):
    '''Set of all members of U that are not members of A'''
    result = [x for x in U if x not in A]
    return result

print("Testing set difference")
print( setDifference([1,2,3],[2,3,4]) )
print( setDifference([2,3,4],[1,2,3]) )

def symDifference(A, B):
    '''Returns the symmetric difference of sets A and B'''
    result = [x for x in A if x not in B] + [x for x in B if x not in A]
    return result

print("Testing symmetric difference")
print( symDifference([1, 2, 3], [2, 3, 4]) )
print( symDifference([1, 2, 3], [1, 2, 3]) )

def cartesianProduct(A, B):
    result = [(x, y) for x in A for y in B]
    return result

print("Testing cartesian product")
print(cartesianProduct([1, 2], ["red", "white"]))
print(cartesianProduct(range(1, 13), ["hearts", "spades", "diamonds", "clubs"]))
