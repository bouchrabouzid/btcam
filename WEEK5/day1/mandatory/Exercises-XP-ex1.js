// 🌟 Exercice 1 : Scope

// -------------------------
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

funcOne();
// ✅ Prévision : "inside the funcOne function 3"
// Explication : a est initialisé à 5, et comme 5 > 1, la condition est vraie, donc on change a à 3

// #1.2
// Si on utilise const à la place de let : const a = 5;
// ❌ Résultat : Erreur (TypeError), car on ne peut pas réassigner une valeur à une constante

// -------------------------
// #2
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree(); // ✅ Affiche : "inside the funcThree function 0"
funcTwo();    // a est modifié à 5
funcThree(); // ✅ Affiche : "inside the funcThree function 5"

// #2.2
// Si on déclare a avec const : const a = 0;
// ❌ Résultat : Erreur, car on ne peut pas changer la valeur d'une constante dans funcTwo

// -------------------------
// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive();
// ✅ Affiche : "inside the funcFive function hello"

// -------------------------
// #4
let a = 1;

function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix();
// ✅ Affiche : "inside the funcSix function test"

// #4.2
// Si on utilise const à la place de let dans la fonction : const a = "test";
// ✅ Résultat : identique

// -------------------------
// #5
let a = 2;

if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// ✅ Résultat :
// "in the if block 5"
// "outside of the if block 2"
// Les deux variables sont différentes à cause du scope de bloc de let






