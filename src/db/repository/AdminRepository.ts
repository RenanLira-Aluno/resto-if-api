
import { AppDataSource } from "../database";
import { Admin } from "../entity/Admin";
import { Cardapio } from "../entity/Cardapio";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";


export class AdminRepo {
    adminRepo = AppDataSource.getRepository(Admin)
    refeicaoRepo = AppDataSource.getRepository(RefeicoesDoDia)
    cardapioRepo = AppDataSource.getRepository(Cardapio)

    async criarAdmin(name: string, email:string, password: string) {

        const newAdmin = new Admin()
        newAdmin.email = email
        newAdmin.password = password
        newAdmin.name = name

        const result = this.adminRepo.save(newAdmin)

        return result

    }

    async criarCardapio(desc: string) {

        const cardapio = new Cardapio()

        cardapio.descricao = desc

        const result = await this.cardapioRepo.save(cardapio)

        return result

    }

    async criarRefeicaoDia(dia: Date, idCardapioA: string, idCardapioJ: string) {

        const refeicao = new RefeicoesDoDia()

        let cardapioA = await this.cardapioRepo.findOne({where: {id: idCardapioA}})
        let cardapioJ = await this.cardapioRepo.findOne({where: {id: idCardapioJ}})
        
        refeicao.almoco = cardapioA || undefined
        refeicao.jantar = cardapioJ || undefined
        refeicao.dia = dia

        const result = await this.refeicaoRepo.save(refeicao)

        return refeicao

    }

}