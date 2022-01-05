//import { calculaFrete } from "../models/CalculaFrete.js"
const CalculaFrete = require("./../models/CalculaFrete")

function testeCalculaFrete(entrada, esperado){
   
    const CalculoPromo =  new CalculaFrete()

    //console.assert(resultado === esperado, descricao)
    expect(CalculoPromo.freteDesconto(entrada)).toBe(esperado)
}

const calculadadosFrete = [
    [199.99, 50, "Frete sem desconto - 50"], //item de compra
    [100.00, 50, "Frete sem desconto - 50"], //item de compra
    [200.99, 25, "Frete com desconto - 25"], //item de compra
    [600.99, 0,  "Frete gratis - 0 "],    //item de compra
]

test('Test calculo do frete com desconto', () => {

    calculadadosFrete.forEach((item) =>{
        testeCalculaFrete(item[0], item[1])
    })
    
});







