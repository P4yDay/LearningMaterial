# lambda are in-line anon functions
nums = [1,2,3,4,5,6]
 # normal way to print  a list of squared numbers
def squared(n):
    return n * n

print(list(map(squared,nums)))

# the lamda way
print(list(map(lambda n: n * n, nums)))