import psycopg2

# --------------------- MenuItem Class ---------------------
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            with psycopg2.connect(
                dbname="restaurant", 
                user="postgres", 
                password="Bouchra05", 
                port="5432"
            ) as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", 
                        (self.name, self.price)
                    )
                    conn.commit()  # مهم: حفظ التغييرات
                    print(f"{self.name} added successfully.")
        except Exception as e:
            print("Error while saving item:", e)

    def delete(self):
        try:
            with psycopg2.connect(
                dbname="restaurant", 
                user="postgres", 
                password="Bouchra05", 
                port="5432"
            ) as conn:
                with conn.cursor() as cur:
                    cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
                    if cur.rowcount:
                        conn.commit()  # مهم: حفظ التغييرات
                        print(f"{self.name} deleted successfully.")
                    else:
                        print(f"{self.name} not found.")
        except Exception as e:
            print("Error while deleting item:", e)

    def update(self, new_name, new_price):
        try:
            with psycopg2.connect(
                dbname="restaurant", 
                user="postgres", 
                password="Bouchra05", 
                port="5432"
            ) as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", 
                        (new_name, new_price, self.name)
                    )
                    if cur.rowcount:
                        conn.commit()  # مهم: حفظ التغييرات
                        print(f"{self.name} updated successfully to {new_name} - ${new_price}")
                        self.name = new_name
                        self.price = new_price
                    else:
                        print(f"{self.name} not found.")
        except Exception as e:
            print("Error while updating item:", e)

# --------------------- MenuManager Class ---------------------
class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            with psycopg2.connect(
                dbname="restaurant", 
                user="postgres", 
                password="Bouchra05", 
                port="5432"
            ) as conn:
                with conn.cursor() as cur:
                    cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
                    item = cur.fetchone()
                    if item:
                        return {'item_id': item[0], 'name': item[1], 'price': item[2]}
                    return None
        except Exception as e:
            print("Error while fetching item:", e)
            return None

    @classmethod
    def all_items(cls):
        try:
            with psycopg2.connect(
                dbname="restaurant", 
                user="postgres", 
                password="Bouchra05", 
                port="5432"  # صححت البورت
            ) as conn:
                with conn.cursor() as cur:
                    cur.execute("SELECT * FROM Menu_Items")
                    items = cur.fetchall()
                    return [{'item_id': row[0], 'name': row[1], 'price': row[2]} for row in items]
        except Exception as e:
            print("Error while fetching menu:", e)
            return []

# --------------------- Menu Editor Functions ---------------------
def show_user_menu():
    while True:
        print("\n----- Menu Manager -----")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(Q) Quit")
        choice = input("Enter choice: ").strip().upper()
        if choice == "V":
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(item)
            else:
                print("Item not found.")
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "Q":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

def add_item_to_menu():
    name = input("Item name: ")
    try:
        price = float(input("Item price: "))  # فلوت باش يدعم الأسعار العشرية
        item = MenuItem(name, price)
        item.save()
    except ValueError:
        print("Invalid price. Please enter a number.")

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuItem(name, 0)
    item.delete()

def update_item_from_menu():
    current_name = input("Current item name: ")
    new_name = input("New item name: ")
    try:
        new_price = float(input("New price: "))
        item = MenuItem(current_name, 0)
        item.update(new_name, new_price)
    except ValueError:
        print("Invalid price. Please enter a number.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n---- Restaurant Menu ----")
    for item in items:
        print(f"{item['name']} - ${item['price']}")

# --------------------- Main Program ---------------------
if __name__ == "__main__":
    show_user_menu()




    
