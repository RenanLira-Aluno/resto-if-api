import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { AlunoRepo } from '../../db/repository/AlunoRepository';


export class UserController {

    alunoRepo = new AlunoRepo()

    constructor(){}

     login = async (req: Request, res: Response ) => {
        const {username, password} = req.body

        try {
            const response = await this.alunoRepo.getAluno(username, password)
            
            res.json(response)

        } catch (error: any) {
            res.json({"error": error.message})
        }



    }

    verRefeicoesDoDia = async (req: Request, res: Response ) => {
        const refeicaoDia = await this.alunoRepo.getRefeicoesDia()

        res.json({"refeicao": refeicaoDia})
    }



    




}