import { Router } from "express"
import { UserController } from "../../../controller/AlunoController"
import { AdminController } from "../../../controller/AdminController"

const userController = new UserController()
const adminController = new AdminController()

const refeitorioRouter = Router()

refeitorioRouter.get('/cardapioDoDia', userController.verRefeicoesDoDia)
refeitorioRouter.post('/cardapioDoDia', adminController.criarRefeicaoDia)

refeitorioRouter.post('/criarNovoCardapio', adminController.criarCardapio)




export{refeitorioRouter}