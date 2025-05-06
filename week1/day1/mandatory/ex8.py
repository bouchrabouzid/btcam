sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Pastrami sandwich",
    "Avocado sandwich", "Pastrami sandwich", "Egg sandwich",
    "Chicken sandwich", "Pastrami sandwich"
]

print("The deli has run out of pastrami!")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

for sandwich in sandwich_orders:
    print(f"I made your {sandwich}.")
    finished_sandwiches.append(sandwich)

print("Sandwiches made:", finished_sandwiches)