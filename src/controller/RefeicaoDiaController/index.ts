import { CardapioRepository } from "../../db/repository/CardapioRepository"
import { Request, Response } from 'express';
import { RefeicaoDiaRepository } from "../../db/repository/RefeicaoRepository";

export class RefeicaoDiaController {

    cardapioRepo = new RefeicaoDiaRepository()

    constructor(){}

     getCardapiosDaSemana = async (req: Request, res: Response ) => {
        const response = await this.cardapioRepo.getCardapioDaSemana()

        res.json(response)
    }





}
