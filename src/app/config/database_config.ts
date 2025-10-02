import dotenv from 'dotenv'

dotenv.config()

const teknikalTestDB = {
    host: process.env.DB_HOST,
    port: process.env.DB_HOST_PORT,
    db: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
}

export { teknikalTestDB }