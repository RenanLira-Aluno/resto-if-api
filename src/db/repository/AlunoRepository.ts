import axios from "axios";
import { AppDataSource } from "../database";
import { Aluno } from "../entity/Aluno";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";

export class AlunoRepo {

    repo = AppDataSource.getRepository(Aluno)
    refeicaoRepo = AppDataSource.getRepository(RefeicoesDoDia)

    constructor(){}

    async getAluno(username: string, password: string) {
        const aluno = await this.repo.findOne({where: {matricula: username}})

        if (!aluno) {
            const token = await axios.post("https://suap.ifpi.edu.br/api/v2/autenticacao/token/", {username, password})

            if (token.status != 200)  throw new Error("Usuario e/ou senha invalidos")
            console.log(token.data.access)
            const meusdados = await axios.get("https://suap.ifpi.edu.br/api/v2/minhas-informacoes/meus-dados/", {headers:{Authorization: `Bearer ${token.data.access}`}})

            console.log(meusdados)
            const newAluno = new Aluno()

            newAluno.cpf = meusdados.data.cpf
            newAluno.matricula = meusdados.data.matricula
            newAluno.nome_usual = meusdados.data.nome_usual

            const resultAluno = await this.repo.save(newAluno);

            console.log(resultAluno)
            return resultAluno

        }

        const token = await axios.post("https://suap.ifpi.edu.br/api/v2/autenticacao/token/", {username, password})

        if (token.status != 200) throw new Error("Usuario e/ou senha invalidos")


        return aluno

    }

    async getRefeicoesDia() {
        
        const refeicao = await this.refeicaoRepo.findOneBy({dia: new Date() })
        

        return refeicao
    }

}