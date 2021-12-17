class Vitrine {
    constructor(nome, idVitrine, produtos){
        this._nome      = nome,
        this._vitrine = document.getElementById(idVitrine),
        this._produtos  = produtos
    }   

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    get produtos(){
        return this._produtos 
    }

    listarProdutos(parametro = this._produtos){

        this._vitrine.innerHTML = ""

        parametro.forEach((produto) =>{

            const produtoTemplate  = this.templeProduto(produto)
            this._vitrine.appendChild(produtoTemplate)

        })
    }

    listarPorSecao(secao){
        secao = secao.toLowerCase()
        this.produtos.forEach((produto)=>{
            
            const secaoProduto  = produto.secao.toLowerCase()

            if(secaoProduto == secao){

                const produtoTemplate  = this.templeProduto(produto)
                this._vitrine.appendChild(produtoTemplate)

            }
        })
    }

    templeProduto({nome,preco,secao,categoria,img}){

        const li  = document.createElement("li")
        li.innerHTML =
        `
            <img src="${img}" alt="${nome}">
            <h3>${nome}</h3>
            <p>R$ ${preco},00</p>
            <span>${secao} - ${categoria}</span>
        `
        return li

    }

} 

export {Vitrine}