
class Farm :
    def __init__(self , farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self , animal_type, count = 1):


        if animal_type in self.animals :
            
            self.animals[animal_type] += count
        else :
            self.animals[animal_type] = count

    def get_info(self):
        print(f"farm name : {self.name}")

        for animal, count in self.animals.items():
            print (f'{animal} : {count}')

        print("E-I-E-I-O!")


    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        animal_list = self.get_animal_types()

        if len(animal_list) == 0 :
            print(f"{self.name} has no animals")
            
        elif len(animal_list) > 0 :
           
            animal_types = []

            for i in animal_list :
                count = self.animals[i]
                if count > 1 :
                    animal_types.append(i + 's')
                else :
                    animal_types.append(i)
            

            print(f"{self.name} has {','.join(animal_types)}")



myfarm = Farm('MacDonald’s Farm')

myfarm.add_animal('cheval')
myfarm.add_animal('chat', 50) 
myfarm.add_animal('tigre')
myfarm.add_animal('lapin', 12)



myfarm.get_info()

print(myfarm.get_animal_types())


myfarm.get_short_info()