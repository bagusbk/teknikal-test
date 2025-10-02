import { Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET as string

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers["authorization"]
    const xToken = req.headers["x-token"]

    const token = (xToken as string) || (authHeader ? authHeader.split(' ')[1] : undefined)

    if(!token){
        return res.status(401).send('Access denied. No token provided.')
    }

    try {
        const payload = jwt.verify(token.toString(), secret, {
            algorithms: ['HS512'],
        })

        {req as any}.user = payload
        next()
    } catch (err: any) {
        return res.status(401).send(`Invalid token.`)
    }
}

export default authMiddleware