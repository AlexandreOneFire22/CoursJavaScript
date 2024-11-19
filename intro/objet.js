console.log("Les objets en JavaScript")


//créer un objet

//nom, prénom et age sont des propriétés de l'objet personne1

const personne1 = {
    nom : "Dupond",
    prenoms : ["Jean","Pierre"],
    age : 30,
    adresse : {
        rue :"20 rue de la gare",
        codePostal : "25000",
        ville : "Besancon"
    }
}

//Accéder

console.log(personne1)

console.log(personne1.nom)

console.log(personne1["nom"])

console.log(personne1.adresse.ville)

console.log(personne1.prenoms)

console.log(personne1.prenoms[0])


// Combiner les objets et les tableaux

const personnes = [
    {prenom : "Jean", nom : "Dupond", age : 50},
    {prenom : "Pierre", nom : "Martin", age : 45},
    {prenom : "Ethan", nom : "Boileau", age : 17}
]

//Afficher le nom de toutes les personnes en majuscules
console.log("____________________________________________________________________________________________")
console.log("Afficher le nom de toutes les personnes en majuscules")

personnes.forEach(personne => console.log(personne.nom.toUpperCase()))




//Récupérer dans un tableau l'identité de chaque personne sous la forme "prenom nom" (un espace entre)
console.log("____________________________________________________________________________________________")
console.log("Récupérer dans un tableau l'identité de chaque personne sous la forme \"prenom nom\" (un espace entre)")

personnes.map(personne => `${personne.prenom} ${personne.nom}`)
    .forEach(personne=>console.log(personne))




// Afficher les noms de toutes les personnes majeurs
console.log("____________________________________________________________________________________________")
console.log("Afficher les noms de toutes les personnes majeurs")


personnes.filter(personne => personne.age >=18).forEach(personne => console.log(personne.nom))



// Calculer et afficher la moyenne d'âge de personne
console.log("____________________________________________________________________________________________")
console.log("Calculer et afficher la moyenne d'âge de personne")

console.log(personnes.reduce((somme, personne) => somme + personne.age, 0 )/ personnes.length)



// Rajouter une nouvelle personne dans le tableau
console.log("____________________________________________________________________________________________")
console.log("Rajouter une nouvelle personne dans le tableau")

personnes.push({prenom : "Alexandre",nom : "Gauthier",  age : 19})


console.log(personnes)




