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
