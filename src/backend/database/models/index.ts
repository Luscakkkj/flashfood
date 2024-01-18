import { Sequelize } from "sequelize";
import { config } from "../config/database";

const sequelizeDB = new Sequelize(config)

sequelizeDB.sync().then(_ => console.log("Conectado com sucesso")).catch(error => console.log(error))

export default sequelizeDB