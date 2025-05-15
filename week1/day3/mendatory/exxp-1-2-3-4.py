# ex1

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

# ex2

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")
davids_dog = Dog("Buddy", 50)
sarahs_dog = Dog("Max", 60)
print(f"{davids_dog.name} is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()
print(f"{sarahs_dog.name} is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are of the same height.")

    #ex3
    class Song:
    def __init__(self , lyrics):
      self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line) 

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#ex4


#! 1. Create a class called Zoo.
class Zoo :
    def __init__(self , zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals :
            self.animals.append(new_animal)
    
    def get_animals(self) :
        for i in self.animals:
            print(i)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals :
            self.animals.remove(animal_sold)

    def sort_animals(self) :
        self.animals.sort() 

        grouped_animals = {}

        for animal in self.animals :
            first_ltr = animal[0]

            if first_ltr not in grouped_animals :
                grouped_animals[first_ltr] = []
            
            grouped_animals[first_ltr].append(animal)
        
        return grouped_animals
    
    def get_groups(self):
        print(self.sort_animals())


my_zoo = Zoo('Ramat Gan Safari')

my_zoo.add_animal('lione')
my_zoo.add_animal('cheval')
my_zoo.add_animal('chien')



my_zoo.sell_animal('lione')

my_zoo.get_animals()

my_zoo.get_groups()


