// exercise 1 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 1 : List of people</title>
</head>
<body>
    <h2> Exercise 1 : List of people</h2>
    <script>

        const people = ["Greg", "Mary", "Devon", "James"];

        // Write code to remove “Greg” from the people array.
        people.shift()
        console.log(people);

        // Write code to replace “James” to “Jason”.
        people.splice(2, 1, 'Jason')
        console.log(people);

        // Write code to add your name to the end of the people array.
        people.push('imane')
        console.log(people);

        // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
        console.log(people.indexOf("Mary"))

        // Write code to make a copy of the people array using the slice method.
        // The copy should NOT include “Mary” or your name.
        let peopleCopy = people.slice(0 , 3)
        console.log(peopleCopy);

        // Write code that gives the index of “Foo”. Why does it return -1 ?
        console.log(people.indexOf("Foo"))
        // bc we dont have 'foo' in the list

        // Create a variable called last which value is the last element of the array.
        let last = people[people.length - 1]
        console.log(last)

        // Using a loop, iterate through the people array and console.log each person.
        for (let i = 0 ; i < people.length ; i++){
            console.log(people[i]);    
        }

        // Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
        // Hint: take a look at the break statement in the lesson.
        for (let i = 0 ; i < people.length ; i++){
            console.log(people[i])
            if (people[i] == 'Devon'){
                break;
            }
        }
        
    </script>
    
</body>
</html>

// exircise 2

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 2 : Your favorite colors</title>
</head>
<body>
    <h1> Exercise 2 : Your favorite colors</h1>
    <script>

        // Create an array called colors where the value is a list of your five favorite colors.
        let colors = ['black' , 'white' , 'blue' , 'red' , 'pink']

        // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
        for (let i = 0 ; i < colors.length ; i++){
            console.log(`My #${i + 1} choice is ${colors[i]}`);
        }

        // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
        // Hint : create an array of suffixes to do the Bonus
        let suffixes = ['st', 'nd', 'rd', 'th', 'th'];

        for (let i = 0; i < colors.length; i++) {
            let num = i + 1;
            let suffix = 'th';

            if (num === 1) {
                suffix = 'st';
            } else if (num === 2) {
                suffix = 'nd';
            } else if (num === 3) {
                suffix = 'rd';
            }
            console.log("My " + num + suffix + " choice is " + colors[i]);
        }

    </script>
    
</body>
</html>

// exircise 3

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 3 : Repeat the question</title>
</head>
<body>
    <h1> Exercise 3 : Repeat the question</h1>
    <script>

        // Prompt the user for a number.
        // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
        let user_input = prompt("enter a number")
        console.log(typeof(user_input));

        let number = Number(user_input);
        console.log(typeof number);

        // While the number is smaller than 10 continue asking the user for a new number.
        // Tip : Which while loop is more relevant for this situation?
        while (number < 10) {
            user_input = prompt("number is too small enter a new number pls:");
            number = Number(user_input);
        }

    </script>
    
</body>
</html>

// exersice 4

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 4 : Building Management</title>
</head>
<body>
    <h1> Exercise 4 : Building Management</h1>

    <script>
        // Copy and paste the above object to your Javascript file.
        const building = {
            numberOfFloors: 4,
            numberOfAptByFloor: {
                firstFloor: 3,
                secondFloor: 4,
                thirdFloor: 9,
                fourthFloor: 2,
            },
            nameOfTenants: ["Sarah", "Dan", "David"],
            numberOfRoomsAndRent:  {
                sarah: [3, 990],
                dan:  [4, 1000],
                david: [1, 500],
            },
        }

        // Console.log the number of floors in the building.
        console.log(building.numberOfFloors);
        
        // Console.log how many apartments are on the floors 1 and 3.
        console.log("1st Floor:",building.numberOfAptByFloor.firstFloor);
        console.log("3rd Floor:",building.numberOfAptByFloor.thirdFloor);

        // Console.log the name of the second tenant and the number of rooms he has in his apartment.
        let name = building.nameOfTenants[1]
        let rooms = building.numberOfRoomsAndRent.dan[0]
        console.log(`${name} has ${rooms} rooms`);
        
        // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
        let sarahRent = building.numberOfRoomsAndRent.sarah[1]
        let davidRent = building.numberOfRoomsAndRent.david[1]
        let danRent = building.numberOfRoomsAndRent.dan[1]
        let sum = sarahRent + davidRent
        // console.log(sum);

        if (sum > danRent) {
            building.numberOfRoomsAndRent.dan[1] = 1200
        }
        console.log("dan's new rent:", building.numberOfRoomsAndRent.dan[1]);
    </script>
    
</body>
</html>

// exercise 5

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 5 : Family</title>
</head>
<body>
    <h1> Exercise 5 : Family</h1>
    <script>
        // Create an object called family with a few key value pairs.

        let family = {
            father: "loid",
            mother: "yor",
            daughter: "anya",
            pet: "bond"
        };

        // console.log(family);

        // Using a for in loop, console.log the keys of the object.
        for (let key in family) {
            console.log(key);
        }        
        
        // Using a for in loop, console.log the values of the object.
        for (let key in family) {
            console.log(family[key]);
        }

    </script>
    
</body>
</html>

// exircise 6

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 6 : Rudolf</title>
</head>
<body>
    <h1> Exercise 6 : Rudolf</h1>
    <script>
        const details = {
            my: 'name',
            is: 'Rudolf',
            the: 'reindeer'
        }

        // Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
        let sentence = "";

        for (let key in details) {
            sentence += key + " " + details[key] + " ";
        }

        console.log(sentence);
        
    </script>

    
</body>
</html>
 // exercise 7


 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Exercise 7 : Secret Group</title>
</head>
<body>
    <h1> Exercise 7 : Secret Group</h1>
    <script>

        const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
        // A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
        // Hint: a string is an array of letters
        
        let word = [];

        for (let i = 0; i < names.length; i++) {
            let first = names[i].charAt(0)
            word.push(first)           
        }
        
        word.sort();

        let secretName = word.join("");

        console.log(secretName);
        

    </script>
    
</body>
</html>





