# Challenge 2 : Longest Word

def longest_word(sentence) :
    #split the sentence into words
    words = sentence.split()
    # print(words)

    # for exemple the fist in the longest
    longest = words[0]

    for i in words :
        if len(i) > len(longest) :
            longest = i
    return longest

print(longest_word('Margarets toy is a pretty doll.'))
print(longest_word('A thing of beauty is a joy forever.'))