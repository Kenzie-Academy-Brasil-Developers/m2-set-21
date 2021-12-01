const vitrineCarrinho = document.querySelector(".carrinho ul")
const vitrinePrincipal  = document.querySelector(".vitrineProdutos__vitrine")


//1 FUNÇÃO PARA MONTAR TEMPLATE DO PRODUTO *
  //VALIDAR PRODUTO EM PROMOÇÃO *
  //PRODUTO EM ESTOQUE  *
  //TRATAR DO PREÇO *
  
//3 FUNÇÃO PARA LISTAR OS PRODUTOS
//A) PERCORRER O ARRAY DE OBJETOS,PASSANDO O CADA PRODUTO PARA FUNÇÃO TEMPLTE
//B) ADICIONAR NA VITRINE


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
   
    arrayProdutos.forEach(function(produto){
        const templateProduto  = callTemplateProduto(produto)
       vitrine.appendChild(templateProduto)
    });

}
listarProdutos(dataProdutos, templateProduto, vitrinePrincipal)



//FUNÇÃO PARA INTERCEPTAR CLIQUE
vitrinePrincipal.addEventListener("click", interceptandoEvento)
function interceptandoEvento(evt){
    
    const buttonComprar = evt.target 
    if(buttonComprar.tagName === "BUTTON"){

        console.log("oi")

    }
    
}


