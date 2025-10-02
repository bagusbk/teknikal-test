import dotenv from 'dotenv'

dotenv.config()

const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

interface IParamToken {
    sub?: string
    iat?: number
    exp?: number
}

const generateToken = async (payload: IParamToken) => {
    const token = jwt.sign(payload, secret, {algorithm: 'HS512'})
    return token
}

export {generateToken, IParamToken}