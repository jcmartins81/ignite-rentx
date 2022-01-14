import {createConnection, getConnectionManager, getConnectionOptions} from "typeorm";
import options from '../../ormconfig.json'

async function connect () {
    const connectionOptions = await getConnectionOptions();
    await createConnection(options).then(r => console.log("conectado ao DB!")).catch(error => console.log("Este foi o erro: ", error));
}


export default connect