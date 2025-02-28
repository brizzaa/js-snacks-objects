// creare un array con animali diversi
const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'volpe', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'pavone', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'fagiano', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' }
  ];
  // CREARE NUOVO ARRAY CON MAMMIFERI
  // iterare nell'array e se corrisponde a mammifero pushare in nuovo array
  let animaliMammiferi = []
  for (let i = 0 ; i < animali.length;i++){
    if(animali[i].classe === 'mammiferi'){
        animaliMammiferi.push(animali[i])
    }
  }
  console.log(animaliMammiferi)