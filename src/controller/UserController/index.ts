import axios from 'axios';
import { Request, Response } from 'express';

export class UserController {


    async login(res: Response, req: Request) {
        const {username, password} = req.body

        const token = await axios.post("https://suap.ifpi.edu.br/api/v2/autenticacao/token/", {username, password})

        return res.status(token.status).json(token.data)


    }

}