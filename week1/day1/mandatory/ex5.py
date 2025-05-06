my_fav_numbers = {7, 14, 21}
print(my_fav_numbers)

my_fav_numbers.add(28)
print(my_fav_numbers)

my_fav_numbers.add(35)
print(my_fav_numbers)

my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {3, 9, 27}
print(my_fav_numbers)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)