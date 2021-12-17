class Busca {
    constructor(produtos, idVitrine){
        this._produtos  = produtos,
        this._vitrine = document.getElementById(idVitrine)
    }   

    pesquisarProdutos(pesquisa){

        pesquisa = pesquisa.toLowerCase().trim()

        const produtosFiltrados = this._produtos.filter(function(produto){
            const {nome, secao} = produto

            if(nome.toLowerCase().includes(pesquisa) || secao.toLowerCase().includes(pesquisa)){
                return produto
            }
            
        })

        return produtosFiltrados
    }

} 

export {Busca}