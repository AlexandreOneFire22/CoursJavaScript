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

let personnes = [
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








console.log("____________________________________________________________________________________________")
console.log("Trouver la personne la plus âgée (renvoie l'objet)")

//let ageVieux = personnes.map(personne => personne.age).sort()[personnes.length-1]
//console.log(personnes.find(personne => personne.age === ageVieux))

console.log(personnes.reduce((personnePlusAgee,personne) => {
    if (personne.age > personnePlusAgee.age){
        return personne
    }
    return personnePlusAgee
},personnes[0]))



console.log("____________________________________________________________________________________________")
console.log("Lister les prénoms triés par ordre alphabétique")

console.log(personnes.map(personne => personne.prenom).sort())


console.log("____________________________________________________________________________________________")
console.log("Compter le nombre de mineurs et de majeurs")

let nombrePersonneMineurs = personnes.map(personne => personne.age).filter(age => age<18).length

console.log(`nombre de personnes mineurs = ${nombrePersonneMineurs}`)
console.log(`nombre de personnes majeurs = ${personnes.length - nombrePersonneMineurs}`)



console.log("____________________________________________________________________________________________")
console.log("Vérifier si tout le monde est majeur")

//console.log(personnes.map(personne => personne.age>=18).reduce((somme, actuelle) => somme + actuelle))

console.log(personnes.filter(personne => personne.age >= 18).length ===personnes.length)


console.log("____________________________________________________________________________________________")
console.log("Rechercher une personne par prénom")

console.log(personnes.find(personne => personne.prenom === "Ethan"))

console.log("____________________________________________________________________________________________")
console.log("Supprimer une personne spécifique par son nom")

personnes = personnes.filter((personne) => personne.nom !== "Martin")

console.log(personnes)


console.log("____________________________________________________________________________________________")
console.log("Trouver l'âge moyen des personnes majeures")

let listeAgePersonneMajeur = personnes.map(personne => personne.age).filter(age => age>=18)

console.log(listeAgePersonneMajeur.reduce((somme, age) => somme + age, 0 )/listeAgePersonneMajeur.length)


console.log("____________________________________________________________________________________________")
console.log("Vérifié si au moins une personne a un prénom commençant par 'J' ")


console.log(personnes.filter(personne => personne.prenom.startsWith("J")).length>=1)








