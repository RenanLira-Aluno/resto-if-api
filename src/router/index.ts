import { Router } from "express";

import helloRouter from './helloRouter'
const router = Router()


// minhas rotas aqui
router.use('/hello', helloRouter)

export default router