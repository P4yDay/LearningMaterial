grades = ['A', 'B', 'F', 'C', 'F', 'A']

# filter method
def remove_fails(grade):
    return grade != 'F'

no_f = list(filter(remove_fails, grades))
print(no_f)

# compare the filter method above to a for loop 

filter_grades = []

for grade in grades:
    if grade != 'F':
        filter_grades.append(grade)

print(filter_grades)

# compare the filter method to a comprehension

print( [ grade for grade in grades if grade != 'F'])