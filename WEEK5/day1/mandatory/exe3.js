// Fonction fléchée qui vérifie si la valeur est une chaîne
const isString = (value) => typeof value === 'string';

console.log(isString('bonjour')); // true
console.log(isString([1, 2, 3])); // false
