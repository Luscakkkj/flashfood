import 'dotenv/config'
import { Options } from 'sequelize'

export const config : Options = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: null,
    dialect: 'mysql',
    define:{
        timestamps: false
    }
}
