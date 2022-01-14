class Quadro {

    static clientes     = []
    static cobrancas    = []
    static tagSelect    = document.querySelector("select[id='cliente']")
    static templateLista    = document.querySelector(".app__cobrancas")

    static atualizarClientes(arrayClientes){
        this.clientes = arrayClientes
        this.atualizaSelect()
    }

    static atualizarCobrancas(arrayCobrancas){
        this.cobrancas = arrayCobrancas
        this.templateCobrancas()
    }

    static getClientes(){
        return this.clientes
    }

    static getCobrancas(){
        return this.cobrancas
    }

    static atualizaSelect(){
        this.tagSelect.innerHTML = ""
        this.clientes.forEach(({nome})=>{
            
            const option = document.createElement("option")
            option.value     = nome
            option.innerText = nome
            
            this.tagSelect.appendChild(option)
        })

    }

    static templateCobrancas(){
        
        this.templateLista.innerHTML = ""
        this.cobrancas.forEach(({status,descricao,valor,cliente,data}) =>{
         
            const li = document.createElement("li")

            if(status){
                li.classList.add("paga")
            }

            li.innerHTML = `
                <div>
                    <i data-feather="check-circle"></i> 
                </div>
                <div>
                    <h2>${cliente}</h2>
                </div>
                <div>
                    <p>${descricao}</p>
                </div>
                <div>
                    <p>R$ ${valor}</p>
                </div>
                <div>
                    <p>${data}</p>
                </div>
            `
            this.templateLista.appendChild(li)
            feather.replace()
        })
        
    }

}
export {Quadro}
