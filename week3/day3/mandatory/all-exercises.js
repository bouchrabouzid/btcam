//Exercise 1: Find the numbers divisible by 23

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

displayNumbersDivisible(); 

// Exercise 2: Shopping List
const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Bonus: Decrease stock
    }
  }

  return total;
}

console.log("Total price:", myBill());

//Exercise 3: What’s in my wallet

function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;
  
  const total = 
    (quarters * 0.25) + 
    (dimes * 0.10) + 
    (nickels * 0.05) + 
    (pennies * 0.01);

  return total >= itemPrice;
}

// Tests
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false


//Exercise 4: Vacations Costs

function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let total = days * 40;
  if (days > 10) {
    total *= 0.95;
  }
  return total;
}

function totalVacationCost() {
  const nights = Number(prompt("Number of nights in hotel?"));
  const destination = prompt("Your destination?");
  const days = Number(prompt("Number of car rental days?"));

  const hotel = hotelCost(nights);
  const flight = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane cost: $${flight}`);
  console.log(`The car rental cost: $${car}`);
  console.log(`Total vacation cost: $${hotel + flight + car}`);
}


// Exercise 5: Users DOM Manipulation


const div = document.getElementById("container");
console.log(div);
document.querySelectorAll(".list")[0].children[1].textContent = "Richard";
document.querySelectorAll(".list")[1].children[1].remove();
document.querySelectorAll(".list").forEach(ul => {
    ul.firstElementChild.textContent = "YourName";
});
document.querySelectorAll(".list").forEach(ul => ul.classList.add("student_list"));
document.querySelectorAll(".list")[0].classList.add("university", "attendance");
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";
document.querySelectorAll(".list")[1].lastElementChild.style.display = "none";
document.querySelectorAll(".list")[0].children[1].style.border = "1px solid black";
document.body.style.fontSize = "18px";
if (div.style.backgroundColor === "lightblue") {
    const names = [...document.querySelectorAll(".list")[0].children].map(li => li.textContent);
    alert(`Hello ${names.join(" and ")}`);
}

//Exercise 6: Change the navbar

const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
navBar.querySelector("ul").appendChild(newLi);

const ul = navBar.querySelector("ul");
console.log("First link:", ul.firstElementChild.textContent);
console.log("Last link:", ul.lastElementChild.textContent);

// Exercise 7: My Book List

const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    const bookText = document.createElement("p");
    bookText.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        bookText.style.color = "red";
    }

    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";

    bookDiv.appendChild(bookText);
    bookDiv.appendChild(bookImg);
    section.appendChild(bookDiv);
});

