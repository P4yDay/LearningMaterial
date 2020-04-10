"""
# start at 3 go up to 30(non-inclusive) move up ever 4  
for n in range(3,30, 4):
    print(n)
    #output 3,7,11,15,19,23,27
"""

burgers = ['beef','chicken','veg','turkey','supreme','double']
"""
for n in range(len(burgers)):
    print(n,burgers[n])
"""
# print the burger list backwards (len(burgers) -1),
#  starting from the last node(the second -1)
#  moving backwards (last -1)
for n in range(len(burgers) - 1, -1, -1):
    print(n,burgers[n])