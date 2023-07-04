import { Router } from "express"
import { UserController } from "../../../controller/AlunoController"
import { AdminController } from "../../../controller/AdminController"
import { CardapioController } from "../../../controller/CardapioController"
import { RefeicaoDiaController } from "../../../controller/RefeicaoDiaController"

const userController = new UserController()
const adminController = new AdminController()
const cardapioController = new CardapioController()
const refeicaoDiaController = new RefeicaoDiaController()

const refeitorioRouter = Router()

refeitorioRouter.get('/cardapioDoDia', userController.verRefeicoesDoDia)
refeitorioRouter.post('/criarRefeicaoDoDia', adminController.criarRefeicaoDia)
refeitorioRouter.post('/criarNovoCardapio', adminController.criarCardapio)
refeitorioRouter.delete('/removerRefeicaoDia', adminController.removerRefeicaoDia)
refeitorioRouter.get('/cardapios', cardapioController.allCardapios)
refeitorioRouter.get('/cardapioSemanal', refeicaoDiaController.getCardapiosDaSemana)



export{refeitorioRouter}
