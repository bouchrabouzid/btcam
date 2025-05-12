# Daily Challenge - Circle
import math
class Circle :
    def __init__(self, radius=0, diameter=0):
        if radius:
            self.radius = radius
        elif diameter:
            self.radius = diameter / 2
        else:
            raise ValueError("u must give a radius or diameter")
    
    # for return diamets or raduis
    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.radius * 2
    
    def get_area(self) :
        return math.pi * (self.radius **2)
    
    def __str__(self):
        return f"Circle: radius = {self.radius}, diameter = {self.get_diameter()}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
    def __gt__(self, other):  
        return self.radius > other.radius

    def __eq__(self, other):  
        return self.radius == other.radius

    def __lt__(self, other):  
        return self.radius < other.radius
    
c1 = Circle(3)
c2 = Circle(10)
print(c1)
c3 = c1 + c2
print(c3)
print(c3 > c1)

# sort
circles = [c3, c1, c2]
circles.sort()
for i in circles:
    print(i) 

