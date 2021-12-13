

//var nome = "Hudson"

// function minhafuncao(){

//     console.log(this.nome)
// }
// minhafuncao()


// const minhasegundafuncao = ()=>{
//     console.log(this.nome)

// }
// minhasegundafuncao()

// const nome = ()=>{

//     console.log(this)

// }
// nome()

// function apresentar(){
//     console.log(`Olá, meu nome é ${this.nome}`)
// }


// const pessoa = {
//     nome:"Hudson",
//     metodo2:()=>{

//         console.log(`Olá, meu nome é ${this.nome}`)
        
//     }
// }

// pessoa.metodo2()


//APPLY 
//invoca uma função, setando um novo contexto, 
//também consigo passar parametros para função

var nome = "Hudson"

const pessoa = {
    nome:"Maria",
}

function apresentar(modulo1, modulo2 ,modulo3){
    console.log(`Olá, meu nome é ${this.nome}`)
    //console.log(modulo1,modulo2,modulo3)
}
//apresentar.apply(pessoa, ["M1","M2","M3"])


//CALL
//invoca uma função, setando um novo contexto, 
//também consigo passar parametros para função

//pessoa2.metodo()
//apresentar.call(pessoa2, "M1","M2","M3")


//BIND -> O A FUNÇÃO QUE A GENTE MAIS UTILIZA
//BIND NÃO EXECUTA / RETORNA UMA NOVA FUNÇÃO
// const apresentarBind = apresentar.bind({nome:"Amanda"}, "M1","M2","M3")

// apresentarBind()



const pessoa2 = {
    nome:"Pedro",
    falarNome(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const apresentarBtn = document.querySelector(".apresentar")
apresentarBtn.addEventListener("click", pessoa2.falarNome.bind(pessoa2))



// button = {

//     addEventListener:pessoa2.falarNome(){
//         console.log(this)
//     }

// }



