import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

export class UserController {


    async login(req: Request, res: Response ) {
        console.log(req.body)
        const {username, password} = req.body

        try {
            const token = await axios.post("https://suap.ifpi.edu.br/api/v2/autenticacao/token/", {username, password})
            return res.status(token.status).json(token.data)
            
        } catch (error: any) {
            console.log(error)

            res.status(error.response.status).json({'error': error.response.data.detail})
        }
        




    }

}