/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */


const automobili = [
    {
    marca: "volswagen",
    modello: "polo 1",
    alimentazione: "diesel",
    },
    {
    marca: "bmw",
    modello: "118d",
    alimentazione: "benzina",
    },
    {
    marca: "fiat",
    modello: "panda",
    alimentazione: "diesel",
    },
    {
    marca: "citroen",
    modello: "c3",
    alimentazione: "benzina",
    },
    {
    marca: "lamborghini",
    modello: "urus",
    alimentazione: "metano",
    },
    {
    marca: "ferrari",
    modello: "f40",
    alimentazione: "diesel",
    },
    {
    marca: "alfa",
    modello: "romeo",
    alimentazione: "benzina",
    },
    {
    marca: "ford",
    modello: "mustang",
    alimentazione: "benzina",
    },
    {
    marca: "fiat",
    modello: "punto",
    alimentazione: "benzina",
    },
    {
    marca: "bmw",
    modello: "amg",
    alimentazione: "benzina",
    }
];
let autoBenzina = []
let autoDiesel = []
let autoAltro = []
for (let i = 0; i < automobili.length; i++){
    if (automobili[i].alimentazione === "benzina"){
        autoBenzina.push(automobili[i].modello)
    }
    else if (automobili[i].alimentazione === "diesel"){
        autoDiesel.push(automobili[i].modello)
    }
    else {
        autoAltro.push(automobili[i].modello)
    }
}
console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoAltro);






