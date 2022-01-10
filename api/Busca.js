// fetch("https://kenzie.com.br/blog/wp-json/wp/v2/posts")
// .then(response => response.json())
// .then(data => console.log(data))

import {Api} from "./Api.js"

class Busca{
    constructor(){}
    
    async realizarpesquisa(pesquisa){

        console.log("Buscando dados...")

        //BUSCA API
        const api = new Api()

        const resultadoRequisicao = await api.getProdutos()

 
        console.log("Resultado da requisição: "+ resultadoRequisicao)
        console.log(JSON.parse(resultadoRequisicao))
        return resultadoRequisicao
    }

}

export {Busca}