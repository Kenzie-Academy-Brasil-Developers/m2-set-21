class CalculaFrete{

    constructor(){}

    freteDesconto(entrada){
        if(entrada > 500){
            return 0
        } 
        if(entrada > 200){
            return 25
        }
        return 50
    }

    fretePromo(entrada){
        if(entrada > 500){
            return 0
        } 
        if(entrada > 200){
            return 25
        }
        return 50
    }
    
}
module.exports = CalculaFrete


