//const cardProduto  = document.querySelectorAll(".vitrineProdutos__vitrine li button")

// for(let i = 0; i<cardProduto.length; i++){
    
//     cardProduto[i].addEventListener("click", adicionarProdutoCarrinho)

// }

// cardProduto.forEach(function(buttonComprar){
//     buttonComprar.addEventListener("click", adicionarProdutoCarrinho)
// })


//CONCEITO DE CAPTURING 
//cardProduto.forEach((buttonComprar)=> buttonComprar.addEventListener("click", adicionarProdutoCarrinho))



const div1 = document.getElementById("div1")
div1.addEventListener("click", function(){
    setTimeout(() => {
        div1.style.background = "blue"
    }, 1200);   
})

const div2 = document.getElementById("div2")
div2.addEventListener("click", function(){
    setTimeout(() => {
        div2.style.background = "blue"
    }, 1000);
})

const div3 = document.getElementById("div3")
div3.addEventListener("click", function(evt){
    
    setTimeout(() => {
        div3.style.background = "blue"
    }, 900);

    
})

const div4 = document.getElementById("div4")
div4.addEventListener("click", function(evt){
    setTimeout(() => {
        div4.style.background = "blue"
    }, 800);
    evt.stopPropagation()
})

const div5 = document.getElementById("div5")
div5.addEventListener("click", function(){
    setTimeout(() => {
        div5.style.background = "blue"  
    }, 700);
   
})


