# Read is default we need to write
#  the 'w' writes into it
with open('ForReadAndWrite/write.txt', 'w') as write_file:
    write_file.write('Yurr, python is a fun language')
# problem with 'w' it deletes what's inside
# 'a' allows us to ammend into the file (not delete whats in it)
with open('ForReadAndWrite/write.txt', 'a') as write_file:
    write_file.write('\n I love it so much, I dream in python')

quotes = [
    '\n zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    '\n zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    '\n zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
]

with open('ForReadAndWrite/write.txt', 'a') as write_file:
    write_file.writelines(quotes)

