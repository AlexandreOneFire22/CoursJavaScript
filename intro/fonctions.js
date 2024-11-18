console.log("Les fonctions en JavaScript")





// Fonctions "classique"

function addition1 (a,b) {
    return a+b
}

console.log(addition1(2,3))




// Fonctions anonymes (ne porte pas de nom explicite)

const addition2 = function (a,b){
    return a+b
}

console.log(addition2(6,4))




// Fonctions fléchées (arrow function -> ES6)


const addition3 = (a,b)=>{
    return a+b
}

console.log(addition3(8,8))



// Si la fonction possède une seule instruction (return implicite)

const addition4 = (a,b) => a+b

console.log(addition4(10,5))



// Si la fonction possède un seul paramètre

const puissance2 = a => a*a

console.log(puissance2(5))



//Si la fonction ne possède aucun paramètre

const salut = () => console.log("Salut à tous !")

salut()

console.log(salut())


// Portée des variables dans les fonctions
// Une variable défini en dehors de toute fonction à une portée globale et elle est accesible partout dans le code (y compris dans la fonction)

let variableGlobale = 10
const afficherVariable = () => console.log(variableGlobale)

afficherVariable()


// Fonctions fléchées et tableaux



let nombres = [2,8,15,17,26,9,42,4]

//Afficher tous les nombres pairs

for (const nombre of nombres) {
    if (nombre % 2 === 0){
        console.log(nombre)
    }
}

console.log("______________________________")

// Afficher tous les nombres pairs en utilisant la méthode foreach

nombres.forEach(nombre => {
    if (nombre % 2 === 0){
        console.log(nombre)
    }
})


// Récupérer dans un tableau tous les nombres > à 10 puis les afficher

console.log("______________________________")

const nombreSuperieur10 = []

for (const nombre of nombres) {
    if (nombre > 10)
        nombreSuperieur10.push(nombre)
}


nombreSuperieur10.forEach(nombre => console.log(nombre))





// Récupérer dans un tableau tous les nombres > à 10 puis les afficher
//Avec la méthode filter


console.log("______________________________")

nombres.filter(nombre=> nombre>10).forEach(nombre=>console.log(nombre))


console.log("______________________________")


//Dans un tableau

const nombresSup10Filter = nombres.filter(nombre=> nombre>10)

nombresSup10Filter.forEach(nombre=>console.log(nombre))


console.log("______________________________")


// Amélioration
nombres
    .filter(nombre=> nombre>10)
    .forEach(nombre=>console.log(nombre))













