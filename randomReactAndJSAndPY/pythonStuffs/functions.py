"""
def greet(name = 'Tim', time = 'afternoon'):
  print(f"good {time}, {name}. Hope you are well")

name = input('enter your name:')
time = input('enter the time of day:')

greet(name,time)
"""


def area(radius):
  return 3.142 * radius * radius

def volume(area, length):
  print(area * length)

radius = int(input('Enter a radius:'))
length = int(input('enter a length: '))


volume(area(radius), length)