
//CALLBACK -> É UM FUNÇÃO QUE É PASSADA COMO ARGUMENTO PARA OUTRA FUNÇÃO

// addEventListener("click", callback)
// setInterval(callback, 2000)
// setTimeout(callback, 200)
// Array.map(callback)
// Array.filter(callback)


function mostrarNome(nome){
    console.log("Meu nome é "+ nome)
}

function pessoa(pessoa, callMostrarNome){
    
    callMostrarNome(pessoa.nome)

}
//pessoa({nome:"Hudson"}, mostrarNome)



// function add(num1,num2){
//     return num1+num2
// }

// function multiplicacao(num1,num2){
//     return num1*num2
// }


// function calculadora(numero1,numero2, operacao){

//     const resultado = operacao(numero1,numero2)

//     console.log(resultado)

// }

// calculadora(2,2, add)
// calculadora(2,3, multiplicacao)


// function soma(){
//     let result = 0
//     for(let i = 0; i<arguments.length;i++){
//         result += arguments[i]
//     }
//     console.log(result)
// }
// soma(1,2,3,4,5,6,7,8)

 
// const soma = (a,b, ...numeros)=>{
//     console.log(a)
//     console.log(b)
//     console.log(numeros)
// }
// soma(10,20,3,4,5,6,7,8)

//----MÉTODOS---//

const arrayNUmeros = [1,2,3,4,5,6,7,8]


//arrayNUmeros.forEach(soma)

function soma(currentValue,index,array){
    console.log(`${index}:[${currentValue}]`)
}
//ARRAY COMO ARGUMENTO **
//UMA FUNÇÃO **
//FAZ UM LOOP NESSE ARRAY **
//EXECUTA A FUNÇÃO PASSADA COMO ARGUMENTO PARA CADA VALOR DO ARRAY
//PASSA ESSES VALORES (ELEMENTO, INDEX, ARRAY...) COMO ARGUMENTO PARA ESSA FUNÇÃO(CALLBACK)

function newForEach(array, funcCallback){

    for(let i = 0; i< array.length; i++){
        
        funcCallback(array[i],i,array)
    }

}
newForEach([2, 5, 9],logArrayElements)


function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}


