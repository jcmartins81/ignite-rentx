import {createConnection, getConnectionManager, getConnectionOptions} from "typeorm";
import options from '../../ormconfig.json'

interface IOptions {
    host: string;
}

async function connect () {
    const newOptions = options as IOptions;
    newOptions.host = 'postgres_ignite'
    await createConnection({ ...options}).then(r => console.log("conectado ao DB!")).catch(error => console.log("Este foi o erro: ", error));
}

export default connect