// Les variables en JavaScript

console.log("Cours JavaScript")

//Déclaration d'une variable

let a=10

console.log(a)

a=20

console.log(a)

let b

console.log(b) // Undefined

// Déclaration constante

const c = 10

console.log(c)

//c = 20 -> Erreur Constante (on peut pas la modfier)
// const d -> Erreur (Obligé d'être assigné)

//Déclaration d'une chaine de caractère

let promotion = "BTS SIO2"
console.log(promotion)

//Immutabilité des chaînes
let prenom = "john"
console.log(prenom)

prenom[0] = "J"
console.log(prenom)



// Boxing
// C'est le processure par lequel une valeur primitive (nombre, chaîne, booléen,....)
// est temporairement convertie en un objet afin de permettre l'utilisation de méthode

// Boxing sur les nombres (utilise la Classe Number)

let nombre = 20

let resultat = nombre.toFixed(2)

console.log(resultat)

//Boxing sur les chaînes (utilise la Classe String)

let str = "hello"

console.log(str.toUpperCase())

let str2 = new String("hello")


//Concaténation de chaînes (opérateur +)

let ch1 = "Bonjour"
let ch2 = "tout le monde !"

let message = ch1 + " " + ch2

console.log(message)

ch1 = "3"
ch2 = "7"
message = ch1 + ch2
console.log(message)



// Template litérale `` (backsticks Alt Gr + 7)

let nom = "Pierre"
let age = 30

let presentation = `Je m'appelle ${nom} et j'ai ${age} ans`

console.log(presentation)




















