import { CardapioRepository } from "../../db/repository/CardapioRepository"
import { Request, Response } from 'express';

export class CardapioController {

    cardapioRepo = new CardapioRepository()

    constructor(){}

     allCardapios = async (req: Request, res: Response ) => {
        const response = await this.cardapioRepo.getAllCardapios()

        res.json(response)
    }


    
}