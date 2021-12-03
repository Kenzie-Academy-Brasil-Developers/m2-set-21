//SELETORES DE ELEMENTOS
const vitrineCarrinho = document.querySelector(".carrinho ul")
const vitrinePrincipal  = document.querySelector(".vitrineProdutos__vitrine")
const menuCategorias  = document.querySelector("header ul")



//***************************//
    //CARROSSEL DE IMAGENS
//**************************//
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

//*********************************************//
    //FUNÇÃO PARA LISTAR OS PRODUTOS DA BASE 
//***********************************************//
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

        //IDENTIFICA ID DO BOTÃO 
        const idProduto  = buttonComprar.getAttribute("data-id")
        
        //ADICIONA NO CARRINHO
        adicionarProdutoCarrinho(idProduto)
        
        //ATUALIZA INFORMAÇÕES DO CARRINHO
        atualizarQtdCarrinho()
    }
    
}


//*********************************************//
    //FUNÇÃO PARA ADICIONAR PRODUTOS NO CARRINHO 
//***********************************************//
let carrinhoCompra = []
function adicionarProdutoCarrinho(idProduto){

    //VERIFICA SE PRODUTO ESTÁ NA BASE, SE SIM RETORNA ESSE PRODUTO
    const produtoFiltrado  = dataProdutos.find((produto)=>produto.id == idProduto)
    
    //VERIFICA O ESTOQUE DESSE PRODUTO
    if(produtoFiltrado.estoque > 1){
       
        //ADICIONA PRODUTO NO CARRINHO
        carrinhoCompra.push(produtoFiltrado)
       
        //REAPROVEITANDO A MESMA FUNÇÃO PARA LISTAR 
        listarProdutos(carrinhoCompra, templateProduto, vitrineCarrinho)

        //NOTIFICA USUÁRIO DA OPERAÇÃO
        notificacaoAddProduto("Produto adicionado no carrinho", true)
    }   else{

        //NOTIFICA USUÁRIO DA OPERAÇÃO
        notificacaoAddProduto("Produto com baixo estoque", false)
    }
    
}

//FUNÇÃO PARA INTERCEPTAR CLIQUE CARRINHO
const interceptandoEventoCarrinho = (evt) => {
    
    const buttonComprar = evt.target 
    if(buttonComprar.tagName === "BUTTON"){

        const idProduto  = buttonComprar.getAttribute("data-id")
        removerProdutoCarrinho(idProduto)
        atualizarQtdCarrinho()
    }
    
}
vitrineCarrinho.addEventListener("click", interceptandoEventoCarrinho)

//*********************************************//
    //FUNÇÃO PARA REMOVER PRODUTOS DO CARRINHO
//***********************************************//
function removerProdutoCarrinho(idProduto){
    
    //PRIMEIRA FORMA DE REMOÇÃO
    const produtoFiltrado  = carrinhoCompra.find((produto)=>produto.id == idProduto)
    const index = carrinhoCompra.indexOf(produtoFiltrado)
    carrinhoCompra.splice(index, 1)

    //SEGUNDA FORMA DE REMOÇÃO 
    //carrinhoCompra  = carrinhoCompra.filter((produto)=> produto.id !== Number(idProduto))

    //REAPROVEITANDO A MESMA FUNÇÃO PARA LISTAR 
   listarProdutos(carrinhoCompra, templateProduto, vitrineCarrinho)
   notificacaoAddProduto("Produto removido com sucesso", true)
}


//*********************************************//
    //FUNÇÃO PARA ATUALIZAR INFORMAÇṌES DO CARRINHO
//***********************************************//
function atualizarQtdCarrinho(){
    
    //SELECIONA ELEMENTOS
    const qtdProdutos   = document.getElementById("qtdProdutos")
    const precoTotal    = document.getElementById("precoTotal")
    
    //ATUALIZA QUANTIDADE DE PRODUTOS NO CARRINHO
    qtdProdutos.innerText = `QTD Produtos: ${carrinhoCompra.length}`
    
    //CALCULA TOTAL DE PREÇO DO CARRINHO
    const total = carrinhoCompra.reduce(function(total, produto){

        //VERIFICA STATUS DO PRODUTO, PARA SOMAR O PREÇO PROMOCIONAL
        if(produto.oferta === true){
            return total + Number(produto.precoPromocional)
        }else{
            return total + Number(produto.preco)
        }
       
    }, 0)
    precoTotal.innerText = `Total preço: R$ ${total},00`
}


//*********************************************//
    //FUNÇÃO PARA NOTIFICAR USUÁRIO DAS OPERAÇÕES
//***********************************************//
function notificacaoAddProduto(mensagem, estado){
    const tagNotificacao = document.querySelector(".notificacao")
    const span = document.querySelector(".notificacao span")

    if(estado === true){
        tagNotificacao.classList.add("sucees")
        span.innerText = mensagem
    }else{
        tagNotificacao.classList.add("error")
        span.innerText = mensagem
    }

    setTimeout(() => {
        tagNotificacao.classList.remove("sucees")
        tagNotificacao.classList.remove("error")
    }, 1800);
}


//*********************************************//
    //FUNÇÃOS DE FILTRO DA VITRINE 
//***********************************************//
menuCategorias.addEventListener("click", interceptandoFiltro)
function interceptandoFiltro(evt){
    evt.preventDefault()

    if(evt.target.tagName == "A"){
        const escolhaUsuario  = evt.target.innerText.toLowerCase()

        //FILTRO PARA MOSTRAR TODOS OS PRODUTOS
        if(escolhaUsuario === "home"){
          
            listarProdutos(dataProdutos, templateProduto, vitrinePrincipal)

        //FILTRO PARA FILTRAR POR PREÇO
        }else if(escolhaUsuario === "preço"){
          
            filtroPreco()
        
        //FILTRO PARA FILTRAR POR OFERTA
        }else if(escolhaUsuario === "oferta"){
            
            filtroProdutos(true, "oferta")

        }else{
            
            //FILTRO PARA FILTRAR POR CATEGORIA
            filtroProdutos(escolhaUsuario, "categoria")

        }
        
    }
    
}

//FUNÇÃO PARA EXECUTAR FILTRO POR CATEGORIA/OFERTA
const filtroProdutos = (filtro, tipoFiltro) => {

    //FILTROS,UTILIZANDO A CHAVE DO OBJETO
    //PRODUTO[CATEGORIA] === CAMISETA
    //PRODUTO[CATEGORIA] === BLUSAS
    //PRODUTO[OFERTA]    === TRUE
    const produtosFiltrados = dataProdutos.filter((produto) => produto[tipoFiltro] === filtro)
    listarProdutos(produtosFiltrados, templateProduto, vitrinePrincipal)
}

//FUNÇÃO PARA FILTRAR POR PREÇO
let statusFiltro  = false
const filtroPreco = () =>{
   
    //UTILIZANDO SPREED PARA FAZER UMA CÓPIA E GARANTIR A IMUTABILIDADE DA BASE ORIGINAL
    //SORTE ALTERA O ARRAY ORIGINAL
    let produtosFiltrados =  [...dataProdutos]

    if(statusFiltro === false){
        
        //decrecente
        produtosFiltrados  = produtosFiltrados.sort((a,b)=> b.preco - a.preco)
        statusFiltro = true 

    }else{
    
        //crecente
        produtosFiltrados  = produtosFiltrados.sort((a,b)=> a.preco - b.preco)
        statusFiltro = false
    }
    
    listarProdutos(produtosFiltrados, templateProduto, vitrinePrincipal)
}





