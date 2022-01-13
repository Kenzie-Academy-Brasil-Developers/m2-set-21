class RotaCobranca {

    //URL http://localhost:3000/
    // clientes
    static urlAPI  = "http://localhost:3000/cobrancas"

    static
    async post(data) {
        
        const response = await fetch(this.urlAPI, {

            method: "post",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),

        })

        return response
    }

    static
    async get() {
       
        let response = await fetch(this.urlAPI);
        let data     = await response.json();
        return data
        
    }   

}

export {RotaCobranca}