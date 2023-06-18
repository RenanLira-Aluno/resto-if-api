import { Router } from "express";
import { userRouter } from "./userRoutes";


const router = Router()


// minhas rotas aqui
router.use('auth', userRouter)

export default router