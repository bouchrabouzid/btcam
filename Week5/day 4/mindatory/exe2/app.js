import { people } from './data.js';

const calculateAverageAge = () => {
    let total = 0

    for (let person of people) {
        total += person.age;
    }

    let avrg = total / people.length
    console.log("Average age:", avrg.toFixed(2));
    
}

calculateAverageAge()