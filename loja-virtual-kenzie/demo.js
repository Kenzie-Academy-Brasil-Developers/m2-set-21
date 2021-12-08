const hudson = {
    nome:"Hudson",
    sobrenome:"Carolino",
}

//ADICIONANDO NOVA PROPRIEDADE
const pessoa1 =  {...hudson, idade:25}

//ALTERANDO VALOR DE UMA PROPRIEDADE
const pessoa3 = {...hudson, sobrenome:"Silva",}

//RENOMEAR UMA PROPRIEDADE 
const {nome:nomecompleto, sobrenome} = hudson

// console.log(nomecompleto)
// console.log(sobrenome)

//ARRAY
let nomes = ["Hudson","Maria","Pedro"]

let [primeiroNome, maria,pedro] = nomes

// console.log(primeiroNome)
// console.log(maria)
// console.log(pedro)

let a,b;

[a,b] = [1,2]

[a,b] = [b,a]


//
const array1 = [1,2,3,4,5]

const array3 = [...array1, 100] 
  
//console.log(array3)

