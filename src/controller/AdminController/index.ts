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

    novoAdmin = async (req: Request, res: Response) => {

        const {name, email, password} = req.body

        const response = this.adminRepo.criarAdmin(name, email, password)

        res.json(response)
    }

     

    




}