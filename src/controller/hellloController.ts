import { Request, Response } from "express"; 

export class HelloController {

    hello = async(req: Request, res: Response) => {
        return res.status(200).json({
            'hello': 'controller'
        })
    }

}