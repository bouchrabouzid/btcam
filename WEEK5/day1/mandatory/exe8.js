//partie 1
// Fonction externe qui prend la taille du jus
function faireJus(taille) {
    // Fonction interne qui prend 3 ingrédients
    function ajouterIngredients(ing1, ing2, ing3) {
        const phrase = `Le client veut un jus ${taille} contenant ${ing1}, ${ing2}, ${ing3}.`;
        document.body.innerHTML += `<p>${phrase}</p>`;
    }

    // Appel de la fonction interne
    ajouterIngredients('pomme', 'banane', 'kiwi');
}

// Appel de la fonction principale
faireJus('grand');

// partie 2
function faireJus(taille) {
    const ingredients = []; // Tableau pour stocker les ingrédients

    // Fonction interne qui ajoute les ingrédients au tableau
    function ajouterIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // Fonction qui affiche le jus et ses ingrédients
    function afficherJus() {
        const phrase = `Le client veut un jus ${taille} contenant ${ingredients.join(', ')}.`;
        document.body.innerHTML += `<p>${phrase}</p>`;
    }

    // Ajouter 6 ingrédients (2 appels de la fonction)
    ajouterIngredients('orange', 'mangue', 'ananas');
    ajouterIngredients('fraise', 'citron', 'raisin');

    // Afficher le jus final
    afficherJus();
}

// Appel global
faireJus('moyen');
