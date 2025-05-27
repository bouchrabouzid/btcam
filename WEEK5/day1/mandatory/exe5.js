// Déclaration de fonction
function convertirKgEnGr1(kg) {
    return kg * 1000;
}
console.log(convertirKgEnGr1(2)); // 2000

// Expression de fonction
const convertirKgEnGr2 = function(kg) {
    return kg * 1000;
};
console.log(convertirKgEnGr2(3)); // 3000

// La déclaration de fonction est "hoistée" (disponible avant sa définition), contrairement à l'expression.

// Fonction fléchée en une ligne
const convertirKgEnGr3 = (kg) => kg * 1000;
console.log(convertirKgEnGr3(4)); // 4000
