

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