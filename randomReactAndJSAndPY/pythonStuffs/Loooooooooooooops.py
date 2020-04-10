""" # FOR LOOPS
ninjas = ['asxee', 'kie kie', 'lubu', 'tim', 'alex', 'sasasc', 'sasccsxa']

#  you can add [num:num] if you want to get certain nodes
for ninja in ninjas:
    if ninja == 'tim':
        print(f'heeeeeey {ninja} is NOT a ninja')
        # add a break if you want to end the for loop
        # Note: this will stop after tim
    else:
        print(f'This is ninja {ninja}')
 """

# WHILE LOOPS
age = 20
num = 0
while num < age:
  if num == 0:
        num += 1
        continue
  if num % 2 == 0:
        print(num)
  if num > 10:
        break
  num += 1