const axios = require("axios");
module.exports={

    get:async function(codeStudent){
        const {data} = await axios.get("http://usuarios_api:8080/usuario/"+codeStudent);
        return data[0]; 
    }
}