class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating three cat objects
cat1 = Cat("Whiskers", 5)
cat2 = Cat("Mittens", 8)
cat3 = Cat("Shadow", 3)
def find_oldest_cat(cat1, cat2, cat3):
    # Comparing ages to find the oldest cat
    oldest = cat1
    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

