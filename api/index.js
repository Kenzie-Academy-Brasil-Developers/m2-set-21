

import {Busca} from "./Busca.js"

const buscaHome = new Busca()
//console.log(buscaHome.realizarpesquisa())




// async function getProdutos(servico){
   
//     const response  = await fetch(`https://kenzie.com.br/blog/wp-json/wp/v2/${servico}`)
//     const dados     = await  response.json()
//     console.log(dados)

//     return dados
// }

//getProdutos("posts")

fetch(`https://kenzie.com.br/blog/wp-json/wp/v2/posts`)
.then(response => response.json())
.then(dadosTratados => console.log(dadosTratados))
