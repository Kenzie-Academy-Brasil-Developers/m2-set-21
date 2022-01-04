// let boardVitoriaHorizontal = [
//     ["","",""],
//     ["","",""],
//     ["X","X","X"]
// ] 

// let boardVitoriaVerticaltTrue = [
//     ["","X",""],
//     ["","X",""],
//     ["","X",""]
// ] 

// let boardVitoriaHorizontalFalse = [
//     ["","",""],
//     ["","",""],
//     ["X","X",""]
// ] 

// play1 = 0

// const tabuleiro = document.querySelector(".tabuleiro")

// console.assert(funcaoValidacaoVitoria(boardVitoriaVertical)=== true, "")
// console.assert(funcaoValidacaoHorizontal(boardVitoriaHorizontal) === true, "")


//PARTIÇÃO DE EQUIVALENCIA

//FRETE GRATIS PARA COMPRAS ACIMA DE R$500,00
// 199,99... 499,99| 500,00 | 500,01| 500,02 ... 2000

//valor>500
//valor >= 500


//TABELA DE DECISÃO 
// - FRETE GRATIS PARA SUL E SUDESTE PARA COMPRAS ACIMA DE R$ 200,00
// - FRETE GRATIS PARA TODO O BRASIL PARA COMPRAS ACIMA DE R$ 500,00

// | VALOR | ESTADO | DESCONTO |
// |199.99 | SC     |  NÃO
// |200.00 | SP     |  NÃO
// |499.99 | MG     |  SIM
// |500.99 | ES     |  SIM
// |199.99 | BA     |  NÃO
// |200.00 | PB     |  NÃO
// |499.99 | AM     |  NÃO
// |500.99 | MA     |  SIM












//MANEIRA RUIM DE FAZER 




// function testeFreteDesconto(){
//     const result =  0;
//     console.assert(result > 500,"Não aplica frete gratis")
// }
// //testeFreteGratis()

// function testeFretePadrao(){
//     const result =  0;
//     console.assert(result > 500,"Não aplica frete gratis")
// }
// //testeFreteGratis()


// function testeFretePadrao(){
//     const result =  0;
//     console.assert(result > 500,"Não aplica frete gratis")
// }
// //testeFreteGratis()

//MANEIRA LEGALZINHA DE FAZER 

//VALOR FRETE 50,00
//FRETE GRATIS PARA COMPRAS ACIMA DE DE 500,00
//DESCONTO NO FRETE DE 25 REAIS PARA COMPRA ACIMA DE 200,00
//VALOR PADRÃO PARA COMPRAS ABAIXO DE 200,00
//-----------------------------------------------//
function calculaFrete(entrada){
    if(entrada > 500) return 0
    if(entrada > 200) return 25
    return 50
}

function testeCalculaFrete(entrada, esperado, descricao){
    const resultado =  calculaFrete(entrada)
    console.assert(resultado === esperado, descricao)
}

const calculadadosFrete = [
    [199.99, 50, "Frete sem desconto - 50"], //item de compra
    [100.00, 50, "Frete sem desconto - 50"], //item de compra
    [200.99, 25, "Frete com desconto - 25"], //item de compra
    [600.99, 0,  "Frete gratis - 0 "],    //item de compra
]

calculadadosFrete.forEach((item) =>{
    testeCalculaFrete(item[0], item[1], item[2])
})



