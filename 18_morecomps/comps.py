def pythagoreanTriples(n):
    return [(s1, int(((h * h) - (s1 * s1)) ** 0.5), h) for h in range(1, n + 1) for s1 in range(1, h) if (((h * h) - (s1 * s1)) ** 0.5) % 1 == 0 and (h * h) - (s1 * s1) >= s1 * s1]

def quicksort(li):
    return li

print(pythagoreanTriples(30))
