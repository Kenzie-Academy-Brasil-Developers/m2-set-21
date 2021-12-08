const dataBase = {
    funcionarios: [],
    salarios:{facilitador:1000, instrutor:2000, coache:800},


    cadastrarFuncionario(novoFuncionario){
       
        const {cargo} = novoFuncionario

        this.funcionarios.push({...novoFuncionario, salario: this.salarios[cargo]})
        console.log(this.funcionarios)
        
    }
}