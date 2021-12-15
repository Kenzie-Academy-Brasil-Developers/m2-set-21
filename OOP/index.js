import {Funcionario} from './src/models/Funcionario.js'
import {Instrutor} from './src/models/Instrutor.js'


    const Novofuncionario = new Funcionario(
        "Hudson", 
        "Carolino",
        "hudson@gmail.com",
        "108.266.049-32",
        "31/10/1996",
        "Instrutor"
    )

    //console.log(Novofuncionario.nomeCompleto())

    
    const novoInstrutor = new Instrutor(
        "Hudson", 
        "Carolino",
        "hudson@gmail.com",
        "108.266.049-32",
        "31/10/1996",
        "M1"
    )

    console.log(novoInstrutor.nomeCompletoInstrutor())
    //console.log(novoInstrutor.getStatus())



//INSTRUTOR








