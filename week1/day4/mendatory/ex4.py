
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

