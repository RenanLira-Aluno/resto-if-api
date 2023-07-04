import { NextFunction, Request, Response } from "express";
import { AdminRepo } from "../db/repository/AdminRepository";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const adminRepo = new AdminRepo()

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    try {
        const admin = await adminRepo.getAdmin(login, password)

        return next()
    } catch (error: any) {
        res.status(400).json({"error": error.message})
    }




}
