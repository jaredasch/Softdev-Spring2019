def memoize(f):
    memo = {}
    def helper(i):
        nonlocal memo
        if i in memo:
            return memo[i]
        else:
            memo[i] = f(i)
            return memo[i]
    return helper

@memoize
def fib(i):
    if i == 0:
        return 0
    elif i == 1:
        return 1
    else:
        return fib(i-1) + fib(i-2)

print(fib(100))
print(fib(200))
print(fib(300))
print(fib(400))
