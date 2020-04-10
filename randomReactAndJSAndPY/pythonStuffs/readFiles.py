# ipsum_file = open('ForReadAndWrite\ipsum.txt')

# # #read file in a for loop
# # for line in ipsum_file:
# #     print(line.rstrip())

# # # set file back to the beginning
# # ipsum_file.seek(0)

# # # read file using the readlines() method
# # lines = ipsum_file.readlines()
# # print(lines)

# # at the 50th character read only 100 characters
# ipsum_file.seek(50)
# file_text = ipsum_file.read(100)
# print(file_text)

# # close a file
# ipsum_file.close()






# a more practicle way to open and close files 
# (doesent need countless open and close methods)
# if you want to break out just don't indent in the with code blode

def sequence_filter(line):
    return '>' not in line


with open('ForReadAndWrite\dna_sequence.txt') as dna_file:
    lines = dna_file.readlines()
    print( list( filter( sequence_filter, lines ) ) )

# carry on in code