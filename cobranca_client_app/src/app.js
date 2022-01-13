import {RotaCliente} from "./routes/rotaCliente.js"
import {RotaCobranca} from "./routes/rotaCobrancas.js"

const form = document.querySelector("body")

form.addEventListener("submit", pegarDadosInput)

function pegarDadosInput(event){
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
       
        console.log(RotaCliente.post(dataForm))

    }else{
        RotaCobranca.post(dataForm)
        console.log(dataForm)
    }
    
}

//const resposta = await RotaCliente.get()
const resposta = await RotaCobranca.get()
console.log(resposta)


