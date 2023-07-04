import { Between } from "typeorm";
import { AppDataSource } from "../database";
import { Cardapio } from "../entity/Cardapio";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";
import dayjs from "dayjs";

export class RefeicaoDiaRepository {

    refeicaoRepo = AppDataSource.getRepository(RefeicoesDoDia)
    cardapioRepo = AppDataSource.getRepository(Cardapio)


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

    async deletarRefeicaoDia(id: string) {
        const refeicao = await this.refeicaoRepo.findOneBy({id})

        if (!refeicao) {
            throw new Error('RefeicaoDia não existe')
        }

        await this.refeicaoRepo.delete({id: refeicao?.id})

        return true
    }

    async getRefeicoesDia() {

        const refeicao = await this.refeicaoRepo.findOneBy({dia: new Date() })


        return refeicao
    }

    async criarRefeicaoDia(dia: Date, idCardapioA: string, idCardapioJ: string) {

        const verifyrefeicao = await this.refeicaoRepo.findOne({where: {dia}})

        if (verifyrefeicao) throw new Error('Refeicao do dia já cadastrada')

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
