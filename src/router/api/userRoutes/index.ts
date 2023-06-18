import { Router } from "express"
import { UserController } from "../../../controller/UserController"

const userController = new UserController

const userRouter = Router()

userRouter.post('login', userController.login)


export{userRouter}