const vitrineCarrinho = document.querySelector(".carrinho ul")
const vitrinePrincipal  = document.querySelector(".vitrineProdutos__vitrine")



//CARROSSEL DESTAQUE
const arrayImagens = ["./assets/img/1.png","./assets/img/2.png","./assets/img/3.png","./assets/img/4.png","./assets/img/5.png","./assets/img/7.png","./assets/img/8.png"]
const tagImg = document.querySelector(".carrosselDestaque>img")

//FUNÇÃO PARA INICIAR CARROSSEL
function carrosselStart(arrayImagens, tagImg, time){
  
    let contador = 0

    setInterval(function(){
        
        if(contador < arrayImagens.length){
            tagImg.src = arrayImagens[contador]
            contador++
        }else{
            contador = 0
        }
       
    },time)

}
carrosselStart(arrayImagens,tagImg, 1000)


//FUNÇÃO PARA CRIAR TEMPLATE DE PRODUTO => PRECISA RECEBER UM OBJETO PRODUTO
const templateProduto = ({id,produtoNome,imageUrl,preco,precoPromocional,oferta}) => {
    
    //CRIANDO ELEMENTOS HTML
    const li                = document.createElement("li")
    const img               = document.createElement("img")
    const h2                = document.createElement("h2")
    const precoProduto      = document.createElement("p")
    const precoPromo        = document.createElement("p")
    const button            = document.createElement("button")
    
    //ATRIBUINDO VALORES PARA OS ELEMENTOS
    h2.innerText            = produtoNome
    img.src                 = imageUrl
    img.alt                 = produtoNome
    precoProduto.innerText  = `R$ ${preco.replace(".",",")}`
    precoPromo.innerText    = `R$ ${precoPromocional.replace(".",",")}`
    button.innerText        = "Comprar"
    button.setAttribute("data-id", id)
    
    //ADICIONANDO ELEMENTOS NO TEMPLATE => LI
    li.classList.add("vitrineProdutos__vitrine__produto")
    li.appendChild(img)
    li.appendChild(h2)
    li.appendChild(precoProduto)
    if(oferta){
        li.appendChild(precoPromo)
        li.classList.add("promocao")
    }
    li.appendChild(button)
    
    return li
}

//FUNÇÃO PARA LISTAR PRODUTOS NA VITRINE
//array de objetos 
//função template
//vitrine

const listarProdutos = (arrayProdutos, callTemplateProduto, vitrine)=>{
    
    vitrine.innerHTML = ""
    arrayProdutos.forEach(function(produto){
        const templateProduto  = callTemplateProduto(produto)
       vitrine.appendChild(templateProduto)
    });

}
listarProdutos(dataProdutos, templateProduto, vitrinePrincipal)


//ADICIONANDO INTERCEPTADOR NA VITRINE DE PRODUTOS
const vitrineProdutos  = document.querySelector(".vitrineProdutos__vitrine")

//FUNÇÃO PARA INTERCEPTAR CLIQUE
vitrinePrincipal.addEventListener("click", interceptandoEvento)
function interceptandoEvento(evt){
    
    const buttonComprar = evt.target 
    if(buttonComprar.tagName === "BUTTON"){

        const idProduto  = buttonComprar.getAttribute("data-id")
        adicionarProdutoCarrinho(idProduto)

    }
    
}


//ADICIONAR PRODUTO CARRINHO
const carrinhoCompra = []
function adicionarProdutoCarrinho(idProduto){

    const produtoFiltrado  = dataProdutos.find((produto)=>produto.id == idProduto)
    
    if(produtoFiltrado.estoque > 1){
        carrinhoCompra.push(produtoFiltrado)
        //REAPROVEITANDO A MESMA FUNÇÃO PARA LISTAR 
        listarProdutos(carrinhoCompra, templateProduto, vitrineCarrinho)

        console.log("Adicionado no carrinho")
    }   else{
        console.log("Baixo estoque")
    }
    
}





