window.addEventListener("DOMContentLoaded", () => {
   
    const section = document.querySelector("section");
    const nbBox = 24

    let colors = ["#165b33ce",
                    "#146B3Ace",
                    "#FBB229ce",
                    "#EA4630ce",
                    "#BB2528ce",
                    "#196882ce",
    ]
    
// Créer un tableau de 1 à 24 (k = key, v = value)
let numeros = Array.from({length:24}, (k,v) => v + 1)

    // Mélanger le tableau "numéros" sans doublons
    let shuffle = numeros.sort(() => Math.random() - 0.5)
    console.log(shuffle)

    for(let i = 1; i <= nbBox; i++) {

        // Créer un élément de type <div>
        let box = document.createElement("div")
        // On attribue la classe "box" à cet élément
        box.classList.add("box")
        // On ajoute du contenu dans l'élément "box"
        // box.innerHTML = i
        box.innerHTML = shuffle[i-1]
        // Récupère un index aléatoire dans le tableau de couleurs "colors"
        let randomIndex = Math.floor(Math.random() * colors.length)

        // Attribue une couleur de fond à l'indice aléatoire à la div "box"
        box.style.backgroundColor = colors[randomIndex]

        // On ajoute l'élément box dans la section
        section.appendChild(box)

        box.addEventListener("click", () => {
            box.classList.toggle("active")
        })

    }
})