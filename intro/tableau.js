console.log("Les Tableaux en JavaScript")

// Déclarer un tableau

const tab = [10,20,44,12]

console.log(tab)

//Un tableau est un objet de la classe Array

console.log(tab.length)

//Accéder à un élément du tableau

console.log(tab[1])

//Accèder au dernier élément du tableau

console.log(tab[tab.length-1])

//Ajouter un élément dans le tableau (en fin de tableau)

tab.push(66)

console.log(tab)

// Ajouter un élément au début du tableau

tab.unshift(5)

console.log(tab)

// Ajouter un élément à un index spécifique dans le tableau

tab.splice(1,0,666)
console.log(tab)











