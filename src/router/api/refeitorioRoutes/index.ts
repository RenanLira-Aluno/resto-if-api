import { Router } from "express"
import { UserController } from "../../../controller/AlunoController"
import { AdminController } from "../../../controller/AdminController"
import { CardapioController } from "../../../controller/CardapioController"

const userController = new UserController()
const adminController = new AdminController()
const cardapioController = new CardapioController()

const refeitorioRouter = Router()

refeitorioRouter.get('/cardapioDoDia', userController.verRefeicoesDoDia)
refeitorioRouter.post('/criarRefeicaoDoDia', adminController.criarRefeicaoDia)
refeitorioRouter.post('/criarNovoCardapio', adminController.criarCardapio)
refeitorioRouter.get('/cardapios', cardapioController.allCardapios)



export{refeitorioRouter}