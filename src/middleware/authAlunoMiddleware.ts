import { NextFunction, Request, Response } from "express";
import { AlunoRepo } from "../db/repository/AlunoRepository";



export const authAlunoMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const alunoRepo = new AlunoRepo()

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    try {
        const user = await alunoRepo.getAluno(login, password)

        req.body.alunoId = user.id

        return next()
    } catch (error: any) {
        res.status(400).json({"error": error.message})
    }




}
