# Assuming that a array of number have dupicates
# Write a function that can find a dupicate of the numbers


# Not going to bore whoever is reading this with the
# Hour of drinking and coding and staring at a blank screen
# But I stumble across the Floyd's Tortoise and Hare Algorithm
# https://youtu.be/3vU6kAa2mnI

def findDuplicate(nums):
    #Getting the index 
    tortoise = nums[0]
    hare = nums[0]
    while True:
        #tagging the tortoise
        tortoise = nums[tortoise]
        #tagging the hare (hare has to move faster so it needs a nested array)
        hare = nums[nums[hare]]
        if tortoise == hare:
            break
    ptr1 = nums[0]
    ptr2 = tortoise
    while ptr1 != ptr2:
        ptr1 = nums[ptr1]
        ptr2 = nums[ptr2]

    return ptr1

print(findDuplicate([3,1,4,4,2,6]))