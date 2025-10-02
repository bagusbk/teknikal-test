import express from 'express';
import { usersRouter } from './user_router'
import { produksRouter } from './produk_router'

const router = express.Router()

router.use('/users', usersRouter)

export { router as apiRouter}