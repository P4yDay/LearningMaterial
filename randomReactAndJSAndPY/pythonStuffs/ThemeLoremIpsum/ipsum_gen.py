from random import randint

dapper_words = [
    'dapp', 'aken', 'kendoa', 'csax', 'aewz', 'rdcn', 'chaun',
    'opwd', 'wavy', 'poon', 'snacks', 'bubba', 'landoo', 'kensh'
]


def dapperize(word):
    random_position = randint(0, len(dapper_words) -  1)
    
    return f'{word} {dapper_words[random_position]}'





paragraphs = int(input('How many paragraphs do you want: '))

with open('ipsum.txt') as ipsum_original:
    items = ipsum_original.read().split()
    
    for n in range(paragraphs):
        dapper_texts = list(map(dapperize, items))
        with  open('dapper_ipsum', 'a') as ipsum_dapper:
            ipsum_dapper.write(''.join(dapper_texts) + '\n\n')