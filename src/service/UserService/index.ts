import axios from "axios";
import { response } from "express";



export class UserService {

    async login(username: string, password: string) {


        const response = await axios.post("https://suap.ifpi.edu.br/api/v2/autenticacao/token/", {username, password})




    }


}