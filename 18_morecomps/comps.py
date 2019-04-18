# Jared Asch & Ricky Lin
# SoftDev2 pd6
# K18 -- Getting Clever with List Comprehensions
# 2019-04-16

import random

def pythagoreanTriples(n):
    return [(s1, int(((h * h) - (s1 * s1)) ** 0.5), h) for h in range(1, n + 1) for s1 in range(1, h) if (((h * h) - (s1 * s1)) ** 0.5) % 1 == 0 and (h * h) - (s1 * s1) >= s1 * s1]

print("All pythagorean triples up to n=10 : " + str(pythagoreanTriples(10)))
print("All pythagorean triples up to n=20 : " + str(pythagoreanTriples(20)))
print("All pythagorean triples up to n=30 : " + str(pythagoreanTriples(30)))

def quicksort(l):
    return l if len(l) <= 1 else quicksort( [x for x in l if x < l[len(l) - 1]] ) + [l[len(l) - 1]] + quicksort( [x for x in l if x > l[len(l) - 1]] )

rand_list = [random.randint(0, 1000) for i in range(10)]
print("Random List: " + str(rand_list) )
print("Sorted List: " + str(quicksort(rand_list)) )
print("Is quicksorted list correctly sorted?: " + str(sorted(rand_list) == quicksort(rand_list)) )
