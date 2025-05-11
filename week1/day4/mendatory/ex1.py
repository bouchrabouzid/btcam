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
