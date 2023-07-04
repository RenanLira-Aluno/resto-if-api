import { AppDataSource } from "../database";
import { Cardapio } from "../entity/Cardapio";

export class CardapioRepository {

    cardapioRepo = AppDataSource.getRepository(Cardapio)


    async getAllCardapios() {

        const result = await this.cardapioRepo.find({})

        return result


    }

    async criarCardapio(desc: string) {

        const cardapio = new Cardapio()

        cardapio.descricao = desc

        const result = await this.cardapioRepo.save(cardapio)

        return result

    }


}
