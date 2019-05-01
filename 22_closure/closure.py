# Jared Asch
# SoftDev2 pd6
# K22 -- Closure
# 2019-05-01

def repeat(string):
    def r(n):
        return n * string
    return r

print("repeat('hello')(3) : " + repeat("hello")(3))
print("repeat('jasch')(3) : " + repeat("jasch")(2))

def make_counter():
    x = 0
    def inc():
        nonlocal x
        x += 1
        return x
    return inc

c1 = make_counter()
c2 = make_counter()

print("c1() : %d" % c1())
print("c1() : %d" % c1())
print("c2() : %d" % c2())
print("c1() : %d" % c1())
print("c1() : %d" % c1())
