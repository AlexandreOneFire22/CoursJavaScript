// Générateur de cartes d'anniversaire

//Récuperer le formulaire

const formulaire = document.querySelector("#formulaire")

//Récupérer le bouton qui génère la carte

const genererBtn = document.querySelector("#generer-btn")

// Récupérer la carte

const carte = document.querySelector("#carte")


//Générer le clic sur le bouton

// Associer au bouton un "eventListener" : écouteur d'événement

genererBtn.addEventListener("click",() => {
    //Récupérer les valeurs saisie dans le formulaire

    const prenom = formulaire.prenom.value.trim(); //Trim = enlève les espaces à gauche et à droite ##################################################
    const couleur = formulaire.couleur.value;
    const message = formulaire.message.value.trim();
    //console.log(prenom,couleur,message)


    //Vérifier le formulaire
    if (!formulaire.checkValidity()){
        //Ajouter dynamiquement la classe "was-validated" de bootstrap
        formulaire.classList.add("was-validated")
        return
    }



    //Générer la carte
    //Rendre visible la carte
    carte.style.display = "block"

    //Appliquer l'animation zoomIn
    carte.classList.add("anime-carte")




    //Paramétrer la carte avec les valeurs du formulaire
    const carteBootstrap = document.querySelector("#carte > .card")
    carteBootstrap.style.backgroundColor = couleur

    // Définir une fonction permettant de déterminer si la couleur de fonds est clair ou pas

    const estFondClair = color => {
        const hex = color.replace('#','');
        const r = parseInt(hex.substr(0,2),16)
        const g = parseInt(hex.substr(2,2),16)
        const b = parseInt(hex.substr(4,2),16)
        return ((r+299)+(g+587)+(b+114)) /1000 >128;

    }

    // Appel à la fonction
    carteBootstrap.style.color = estFondClair(couleur) ? '#000' : '#fff'


    carte.querySelector("#carte-prenom").textContent = `Joyeux anniversaire ${prenom}`
    carte.querySelector("#carte-message").textContent = message || "profite bien de ta journée ^^"

})

// Ajouter un écouteur sur le click du bouton "réinitialiser"

const resetBtn = document.querySelector("#reset-btn")

resetBtn.addEventListener("click",() => {
    carte.style.display = "none"
    formulaire.reset()
    formulaire.classList.remove("was-validated")
    carte.classList.remove("anime-carte")
})



