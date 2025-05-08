family = {"rick": 43, "beth": 13 , "morty": 5 , "summer": 8}
total_cost = 0
for person , age in family.items():
    if age  < 3:
        price = 0
        print(f"this person {person} has to pay : {price}$")
        total_cost += price
    elif age <= 12:
        price = 10
        print(f"this person {person} has to pay : {price}$")
        total_cost += price
    else: 
        price =15
        print(f"this person {person} has to pay : {price}$")
        total_cost += price


   
print(f"\nLe coût total pour la famille est: ${total_cost}")