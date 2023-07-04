
import { AppDataSource } from "../database";
import { Admin } from "../entity/Admin";
import { Cardapio } from "../entity/Cardapio";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";


export class AdminRepo {
    adminRepo = AppDataSource.getRepository(Admin)


    async criarAdmin(name: string, email:string, password: string) {

        const newAdmin = new Admin()
        newAdmin.email = email
        newAdmin.password = password
        newAdmin.name = name

        const result = await this.adminRepo.save(newAdmin)

        return result

    }

    async getAdmin(username: string, password: string ) {

        const admin = await this.adminRepo.findOne({where: {email: username}})

        if (!admin || admin.password != password) {
            throw new Error('credenciais invalidas')
        }

        return admin

    }




}
