import { CardapioRepository } from "../../db/repository/CardapioRepository"
import { Request, Response } from 'express';
import { RefeicaoDiaRepository } from "../../db/repository/RefeicaoRepository";

export class RefeicaoDiaController {

    refeicaoRepo = new RefeicaoDiaRepository()

    constructor(){}

     getCardapiosDaSemana = async (req: Request, res: Response ) => {
        const response = await this.refeicaoRepo.getCardapioDaSemana()

        res.json(response)
    }

    criarRefeicaoDia = async (req: Request, res: Response) => {
        const {idCardapioAlmoco, idCardapioJanta, dia} = req.body

        const result = await this.refeicaoRepo.criarRefeicaoDia(new Date(dia), idCardapioAlmoco, idCardapioJanta)


        res.json(result)
    }

    removerRefeicaoDia = async (req: Request, res: Response) => {
        try {
            const {id} = req.body
            const result = await this.refeicaoRepo.deletarRefeicaoDia(id)

            if (result) {
                res.json({"message": "refeicao deletada"})
            }

        } catch (error: any) {

            res.status(400).json({"message": error.message})
        }




    }



}
