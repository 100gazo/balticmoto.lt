import { Sequelize } from "sequelize";
import mysql from 'mysql2/promise'
import { Moto, TyresNew, TyresUsed, Trips, Users, PartsNew, PartsUsed } from '../model/index.js'

const database ={}
const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'balticmotolt'
}

try{
        const connection = await mysql.createConnection({
            host: credentials.host,
            user: credentials.user,
            password: credentials.password
        })
        
        await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

        const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password,{ dialect: 'mysql'})

        database.Motos = Moto(sequelize)
        database.TyresNew = TyresNew(sequelize)
        database.TyresUsed = TyresUsed(sequelize)
        database.Trips = Trips(sequelize)
        database.Users  = Users(sequelize)
        database.PartsNew  = PartsNew(sequelize)
        database.PartsUsed  = PartsUsed(sequelize)

        await sequelize.sync({alter: true})

} catch(error) {
    console.log(error)
    console.log('Nepavyko prisijungti prie duomenų bazės')
}
export default database