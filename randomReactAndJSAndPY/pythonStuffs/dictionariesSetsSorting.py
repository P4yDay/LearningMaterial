"""
cars_I_Want = {
    "Tesla": "model 3",
    "Jaguar" : "XJ",
    "Maserati": "That sedan one",
    "Mercedes Benz": "E Class",
    "Rolls Royce": "Wraith"
    }

cars_I_Can_Afford = {
    "Farrerri": "legos",
    "GMC" : "oldsmobile",
    "Marta": "trains"
}

print(cars_I_Can_Afford["GMC"])
print("Tesla" in cars_I_Want)
print(cars_I_Want.keys())
print(list(cars_I_Want.values()))
"""
ninja_belts = { }


#SETS AND SORTING
def belt_count(dictionary):
    belts = list(dictionary.values())
    for belt in set(belts):
        num = belts.count(belt)
        print(f'There are {num} {belt} belts')

# DICTIONARY
def ninja_intro(dictionary):
    for key, val in dictionary.items():
        print(f'I am ninja {key} and I wear a {val} belt')


# WHILE LOOP USED IN BOTH DICTONARY AND SETS AND SORTING
while True:
    ninja_name = input('enter a ninja name: ')
    ninja_belt = input(' enter a belt color: ')
    ninja_belts[ninja_name] = ninja_belt

    another_belt = input('add another belt (y/n)')

    if another_belt == 'y':
        continue
    else:
        break

#ninja_intro(ninja_belts)
belt_count(ninja_belts)