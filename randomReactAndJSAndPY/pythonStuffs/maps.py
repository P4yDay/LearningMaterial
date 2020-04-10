from random import shuffle

def jumble(word):
    anagram = list(word)
    shuffle(anagram)
    return '-'.join(anagram)


words  = ['beetroot', 'carrot', 'spinach']
anagrams = []


# for word in words:
#   anagrams.append(jumble(word))



# print(anagrams)


# map(function, data)

print(list(map(jumble, words)))

 # not a map but generally more like by python programmers (same output as above)
print( [ jumble(word) for word in words ] )
