import { createConnection } from "typeorm";


createConnection().then(r => console.log("conectado ao db")).catch(error => console.log("esse foi o erro: " + error))