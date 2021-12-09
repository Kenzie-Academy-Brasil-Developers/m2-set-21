const form = document.querySelector("form")

const infoEmpresa = {
    empresa:"Kenzie Academy",
    cnpj:"382748923",
}

const interceptarCampos = (event) => {
    event.preventDefault()
    
    const inputs = event.target
    
    const funcionario = {
        ...infoEmpresa
    }

    for(let i = 0; i < inputs.length; i++){
        const {name, value} = inputs[i]
       
        if(name){
            funcionario[name] = value
        }
        
    }

    dataBase.cadastrarFuncionario(funcionario)
    
}
form.addEventListener("submit", interceptarCampos)



