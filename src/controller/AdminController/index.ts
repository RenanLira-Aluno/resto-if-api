import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { AdminRepo } from '../../db/repository/AdminRepository';


export class AdminController {

    adminRepo = new AdminRepo()

    constructor(){}





    novoAdmin = async (req: Request, res: Response) => {

        const {name, email, password} = req.body

        const response = await this.adminRepo.criarAdmin(name, email, password)

        res.json(response)
    }


    totalPresencas = async (req: Request, res: Response) => {

        const {horario} = req.body

        const response = await this.adminRepo.totalPresencaConfirmadas(horario)

        res.json({"total_presenca": response})
    }





}
