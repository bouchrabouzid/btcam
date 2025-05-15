
#ex1 

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def __init__(self, name, age, color_pattern):
        super().__init__(name, age)
        self.color_pattern = color_pattern

    def purr(self):
        return f"{self.name} with a {self.color_pattern} pattern is purring."

bengal_cat = Bengal("Simba", 3)
chartreux_cat = Chartreux("Luna", 4)
siamese_cat = Siamese("Mochi", 2, "seal point")

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)
sara_pets.walk()


#ex2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a draw"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Bolt", 3, 18)
dog3 = Dog("Max", 4, 25)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))
print(dog3.fight(dog1))
print(dog2.fight(dog3))

#ex3

import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a draw"

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = ', '.join([self.name] + list(args))
        print(f"{names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")

# Test PetDog methods
dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 12)
dog3 = PetDog("Max", 4, 15)

dog1.train()
dog1.play("Buddy", "Max")
dog1.do_a_trick()


# ex4

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name  
        self.members.append(new_member)  

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found in the family.")

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        print("Members:")
        for person in self.members:
            print(f"{person.first_name}, {person.age} years old")
my_family = Family("smith")
my_family.born("sara", 17)
my_family.born("alex", 20)
my_family.check_majority("sara")
my_family.check_majority("alex")
my_family.family_presentation()







