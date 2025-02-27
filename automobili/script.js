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






