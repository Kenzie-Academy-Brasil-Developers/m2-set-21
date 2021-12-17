import {dataProdutos} from './_bd/dataProdutos.js'
import {Vitrine} from './src/models/Vitrine.js'
import {Busca} from './src/models/Busca.js'

const vitrinePrincipal = new Vitrine("Vitrine principal", "vitrinePrincipal", dataProdutos)
vitrinePrincipal.listarProdutos()

const vitrineHortifruti = new Vitrine("Vitrine principal", "hortifruti", dataProdutos)
vitrineHortifruti.listarPorSecao("hortifruti")

const vitrineLaticinio = new Vitrine("Vitrine principal", "laticinio", dataProdutos)
vitrineLaticinio.listarPorSecao("laticinio")

const vitrinePanificadora = new Vitrine("Vitrine principal", "panificadora", dataProdutos)
vitrinePanificadora.listarPorSecao("panificadora")

// CAMPO DE BUSCA
const buscaProdutos = new Busca(dataProdutos, vitrinePrincipal)
document.querySelector(".campoBuscaPorNome").addEventListener("keyup", function(event){
    const buscaInput = event.target.value
   
    const resultadoBusca  = buscaProdutos.pesquisarProdutos(buscaInput)
    vitrinePrincipal.listarProdutos(resultadoBusca)
})  








