import { Router } from "express"
import { UserController } from "../../../controller/AlunoController"
import { AdminController } from "../../../controller/AdminController"

const userController = new UserController()
const adminController = new AdminController()

const authRouter = Router()

authRouter.post('/login', userController.login)
authRouter.post('/createAdmin', adminController.novoAdmin)



export{authRouter}