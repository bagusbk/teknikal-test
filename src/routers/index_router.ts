import express from 'express';

const router = express.Router()

import { apiRouter } from './api/api_router'

router.use('/api', apiRouter)
router.get('/', (_req, res) => {
    res.send('Hello World')
})

export {router as indexRouter}