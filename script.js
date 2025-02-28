/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Partendo da questo, crea quindi un nuovo array inserendo, per ogni
persona, una frase (stringa) con il nome e cognome e l’indicazione se può
guidare, in base all’età. */

const persone = [
    {
      nome: "luca",
      cognome: "brizzante",
      anni: "20",
    },
    {
      nome: "alice",
      cognome: "montali",
      anni: "17",
    },
    {
      nome: "matteo",
      cognome: "zegani",
      anni: "20",
    },
    {
      nome: "giovanni",
      cognome: "brizzante",
      anni: "16",
    },
    {
      nome: "mattia",
      cognome: "lunari",
      anni: "33",
    },
    {
      nome: "gianni",
      cognome: "catulli",
      anni: "70",
    },
    {
      nome: "priscilla",
      cognome: "catulli",
      anni: "16",
    },
    {
      nome: "mario",
      cognome: "prisco",
      anni: "66",
    },
    {
      nome: "gianni",
      cognome: "ferolli",
      anni: "21",
    },
]

for (let i = 0 ; i < persone.length; i++){
    anniPersona = parseInt(persone[i].anni)
    if (anniPersona >= 18){
        console.log(`${persone[i].nome} è maggiorenne (${anniPersona}), quindi può guidare!`)
    }
    else {
        console.log(`${persone[i].nome} è minorenne (${anniPersona}), quindi non può guidare!!`)
    }
}