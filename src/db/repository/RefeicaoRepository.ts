import { Between } from "typeorm";
import { AppDataSource } from "../database";
import { Cardapio } from "../entity/Cardapio";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";
import dayjs from "dayjs";

export class RefeicaoDiaRepository {

    refeicaoRepo = AppDataSource.getRepository(RefeicoesDoDia)


    async getCardapioDaSemana() {

        const comecoSemana = dayjs().startOf('week').toDate()
        const fimSemana = dayjs().endOf('week').toDate()

        const result = await this.refeicaoRepo.find({
            relations: {almoco: true, jantar: true},
            select: {
                almoco: {descricao: true},
                jantar: {descricao: true},
                dia: true,
            },
            where: {
                dia: Between(comecoSemana, fimSemana)
            },
            order: {dia: {direction: "asc"}}
        })

        return result


    }


}
