import { knex } from 'knex'
import {teknikalTestDB} from './database_config'

const dbConnection = knex({
    client: 'mysql2',
    connection: {
        host: teknikalTestDB.host,
        database: teknikalTestDB.db,
        user: teknikalTestDB.username,
        password: teknikalTestDB.password,
        port: teknikalTestDB.port ? parseInt(teknikalTestDB.port) : 3306,
    //     typeCast: function (field: any, next: any) => {
    //         if (field.type === 'BIT' && field.length === 1) {
    //             let bytes = field.buffer()
    //             if (bytes === null) {
    //                 bytes = {
    //                     type: "Buffer",
    //                     data: [0],
    //                 }
    //         }
    //         return bytes[0] === 1
    //     }
    //     return next()
    // },
},
pool: {min: 0, max: 100},
})

export { dbConnection }