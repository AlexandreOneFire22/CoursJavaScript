
// Introduction au DOM

let personnes = [
    {prenom : "Jean", nom : "Dupond", age : 50},
    {prenom : "Pierre", nom : "Martin", age : 45},
    {prenom : "Ethan", nom : "Boileau", age : 17}
]

//Récupérer l'élément ul

const ul = document.querySelector("ul")

//##########################################################################

// list = BALISE list
// .list = CLASS list
// #list = ID list

//##########################################################################


//Récupérer l'élément ul dont l'id est égale à list

const ulListePersonnes = document.querySelector("#list")

//Parcourir le tableau pour créer un <li> pour chaque élément

//Pour chaque élément du tableau
//1. créer un élément 'li'
//2. affecter un valeur = cet élément 'li'
//3. Ajouter le 'li' à la liste (ul)


personnes.forEach( personne => {

    //1. créer un élément 'li'

    const li = document.createElement("li")

    //2. affecter un valeur = cet élément 'li'

    li.textContent = `${personne.prenom} ${personne.nom}`

    //3. Ajouter le 'li' à la liste (ul)

    ulListePersonnes.appendChild(li)

})


//Récupérer tous les 'li' de l'élément ul (id=list)

//Afficher sur la console

//################################################################################################################################

const liPersonnes= document.querySelectorAll("#list > li")

liPersonnes.forEach(li => console.log(li.textContent))
























