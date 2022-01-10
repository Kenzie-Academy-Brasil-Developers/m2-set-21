class Api {
    constructor(){}
    
    getProdutos(){

        let statusConexao = true;

        return new Promise(function(resolve, reject){

            if(statusConexao){

                resolve(JSON.stringify({produtos: [
                    {produto: "Camiseta"},
                    {produto: "Blusa"},
                    {produto: "Celular"},
                ]}))

            }else{


                reject("Nenhum dado encontrado")

            }

        })


    }
}
export {Api}