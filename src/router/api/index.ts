import { Router } from "express";
import { authRouter } from "./authRoutes";
import { refeitorioRouter } from "./refeitorioRoutes";


const router = Router()


// minhas rotas aqui
router.use('/auth', authRouter)
router.use('/refeitorio', refeitorioRouter)

export default router