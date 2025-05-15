
#ch1-xp

# Ask the user for input
numbre = int(input("Enter un numbre: "))
longueur = int(input("Entrer la  longueur: "))

# Use list comprehension to create the list of multiples
multiples = [numbre * i for i in range(1, longueur + 1)]

# Print the result
print("Result:", multiples)

# chl2 -xp
word = input("Enter a word: ")

# Start with an empty result string
result = ""

# Loop through each letter in the word
for i in range(len(word)):
    # Add the letter if it's the first one or different from the one before it
    if i == 0 or word[i] != word[i - 1]:
        result += word[i]

# Print the cleaned-up word
print("Result:", result)




