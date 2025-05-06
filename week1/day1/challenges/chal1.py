# Ask the user for input
numbre = int(input("Enter un numbre: "))
longueur = int(input("Entrer la  longueur: "))

# Use list comprehension to create the list of multiples
multiples = [numbre * i for i in range(1, longueur + 1)]

# Print the result
print("Result:", multiples)