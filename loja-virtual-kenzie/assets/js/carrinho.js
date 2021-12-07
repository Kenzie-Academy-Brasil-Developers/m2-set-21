const carrinhoCompra = {
    produtos: [],
    qtdProdutos:0,
    valorTotal:0,

    adicionarProdutoCarrinho(idProduto){

        //VERIFICA SE PRODUTO ESTÁ NA BASE, SE SIM RETORNA ESSE PRODUTO
        const produtoFiltrado  = dataProdutos.find((produto)=>produto.id == idProduto)
        
        //VERIFICA O ESTOQUE DESSE PRODUTO
        if(produtoFiltrado.estoque > 1){
           
            //ADICIONA PRODUTO NO CARRINHO
            this.produtos.push(produtoFiltrado)
           
            this.atualizarQtdCarrinho()
            return true
        }  
        
        return false
    },

    removerProdutoCarrinho(idProduto){
    
        //PRIMEIRA FORMA DE REMOÇÃO
        const produtoFiltrado  = this.produtos.find((produto)=>produto.id == idProduto)
        const index = this.produtos.indexOf(produtoFiltrado)
        if(index > -1){
            this.produtos.splice(index, 1)

            this.atualizarQtdCarrinho()
            return true
        }
        return false
    },
    
    atualizarQtdCarrinho(){
    
        this.qtdProdutos = this.produtos.length
        
        //CALCULA TOTAL DE PREÇO DO CARRINHO
        const total = this.produtos.reduce(function(total, produto){
    
            //VERIFICA STATUS DO PRODUTO, PARA SOMAR O PREÇO PROMOCIONAL
            if(produto.oferta === true){
                return total + Number(produto.precoPromocional)
            }else{
                return total + Number(produto.preco)
            }
           
        }, 0)
        this.valorTotal = total
    }
    
}





