import {RotaCliente} from "./routes/rotaCliente.js"
import {RotaCobranca} from "./routes/rotaCobrancas.js"
import {Quadro} from "./models/Quadro.js"

const form = document.querySelector("body")

form.addEventListener("submit", pegarDadosInput)

async function pegarDadosInput(event){
    event.preventDefault()
    const formName = event.target.name
    const inputs   = event.target
    const dataForm =  {}
    
    for(let i = 0; i < inputs.length; i++){

        const {name, value} = inputs[i]

        if(name){
            dataForm[name] = value
        } 
        
        inputs[i].value = ""
    } 

    if(formName == "cliente"){
       
        const resposta  = await RotaCliente.post(dataForm)
        iniciarAplicacao()

    }else{

        const resposta  = await RotaCobranca.post(dataForm) 
        iniciarAplicacao()
    }
    
}

function iniciarAplicacao(){
    
    RotaCliente.get().then((clientes)=>{

        Quadro.atualizarClientes(clientes)
       
    })
    
    RotaCobranca.get().then((cobrancas)=>{

        Quadro.atualizarCobrancas(cobrancas)
       
    })

}
iniciarAplicacao()


