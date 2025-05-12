# Challenge 1 : Sorting

words = input("enter some words separated by commas: ")

word_list = []

for i in words.split(',') :
    word_list.append(i)

sorted_list = sorted(word_list)

#join the sorted list again
result = ','.join(sorted_list)


print(result)




