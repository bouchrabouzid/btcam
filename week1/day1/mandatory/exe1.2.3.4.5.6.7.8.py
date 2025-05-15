#Exercise 1 : Hello World
# Print the following output in one line of code:
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
#Exercise 2 : Some Math
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).
result = (99 ** 3) * 8
print(result)
#exercise 3 : What’s your name ?
#Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
my_name = "bouchra"
user_name = input("What is your name? ")
if user_name == my_name:
    print("Hey, name twin! Are we secretly the same person living in parallel universes? ")
else:
    print("Nice to meet you, " + user_name + "!")
    
    #Exercise 4 : Tall enough to ride a roller coaster
#1 Write code that will ask the user for their height in centimeters.

#2 If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.
height_cm = input("Enter your height in centimeters: ") 
height_cm = int(height_cm)  
if height_cm > 145:
    print("You  are tall enough to ride!") 
else:
    print("You need too drink some milk to grow more!")

    # Exercise 5 : Favorite Numbers
# 1. Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers = {2,8,21,1,5,9}
# Remove the last number.
my_fav_numbers.remove(9)
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {1,7,5,4}
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


# Exercise 6: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# On crée un tuple avec trois nombres
mon_tuple = (9, 8, 7)
print("Tuple d'origine :", mon_tuple)
try:
    print("\nJe tente d'ajouter un nombre avec 'add()'...")
    mon_tuple.add(6)
except AttributeError as erreur:
    print("Erreur :", erreur)
    print("Explication : Les tuples ne peuvent pas être modifiés. 'add()' ne fonctionne que sur les ensembles (set).")

nouvelles_valeurs = (4, 5)
print("\nNouveaux nombres à ajouter :", nouvelles_valeurs)

nouveau_tuple = mon_tuple + nouvelles_valeurs

print("\nNouveau tuple :", nouveau_tuple)
print("\nExplication : On ne change pas le tuple d'origine. On en crée un nouveau avec plus de valeurs.")

# Exercise 7: List
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# 1. Remove Banana from the list
basket.remove("Banana")
# 2. Remove Blueberries from the list
basket.remove("Blueberries")
# 3. Add Kiwi to the end of the list
basket.append("Kiwi")
# 4. Add Apples to the beginning of the list
basket.insert(0, "Apples")
# 5. Count how many Apples are in the basket
apple_count = basket.count("Apples")
print("Number of Apples:", apple_count)
# 6. Empty the basket
basket.clear()
# 7. Print the basket
print(basket)

# Exercise 8 : Sandwich Orders
#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"].

# The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.
# We need to prepare the orders of the clients:

# Create an empty list called finished_sandwiches.

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# Initial list of sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Step 1: Remove all "Pastrami sandwich" using a while loop
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Step 2-4: Process the remaining orders
finished_sandwiches = []

# Remove sandwiches from sandwich_orders and add to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")
