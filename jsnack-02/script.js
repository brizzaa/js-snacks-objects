/* A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const primoArray = [
    "pippo", "PLUTO", "Paperino", "TOmmAso"
]
let secondArray = []
for (i = 0 ; i < primoArray.length; i++){
    let parola = primoArray[i].toLowerCase()
    parola = parola.charAt(0).toUpperCase() + parola.slice(1)
    secondArray.push(parola)
}
console.log(secondArray)
