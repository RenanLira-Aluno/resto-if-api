import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { AdminRepo } from '../../db/repository/AdminRepository';


export class AdminController {

    adminRepo = new AdminRepo()

    constructor(){}


    criarCardapio = async (req: Request, res: Response ) => {
        const {desc} = req.body

        const response = await this.adminRepo.criarCardapio(desc)

        res.json(response)
    }


    criarRefeicaoDia = async (req: Request, res: Response) => {
        const {idCardapioAlmoco, idCardapioJanta, dia} = req.body

        const result = await this.adminRepo.criarRefeicaoDia(new Date(dia), idCardapioAlmoco, idCardapioJanta)


        res.json(result)
    }

    removerRefeicaoDia = async (req: Request, res: Response) => {
        try {
            const {id} = req.body
            const result = await this.adminRepo.deletarRefeicaoDia(id)

            if (result) {
                res.json({"message": "refeicao deletada"})
            }

        } catch (error: any) {

            res.status(400).json({"message": error.message})
        }




    }

    novoAdmin = async (req: Request, res: Response) => {

        const {name, email, password} = req.body

        const response = this.adminRepo.criarAdmin(name, email, password)

        res.json(response)
    }








}
