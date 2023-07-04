import axios from "axios";
import { AppDataSource } from "../database";
import { Aluno } from "../entity/Aluno";
import { RefeicoesDoDia } from "../entity/RefeicoesDoDia";
import { PresencasConfirmadas } from "../entity/PresencasConfirmadas";
import dayjs from "dayjs";

export class AlunoRepo {

    repo = AppDataSource.getRepository(Aluno)
    presencaRepo = AppDataSource.getRepository(PresencasConfirmadas)

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



    async confirmarPresenca(alunoid: string, horario: string) {



        const presenca = await this.presencaRepo.find({
            where: {
                aluno: {id: alunoid},
                horario,
                dia: new Date(dayjs().format('YYYY-MM-DD'))
            }
        })

        console.log(presenca)


        if (presenca.length != 0) {
            throw new Error('Presenca já confirmada')
        }

        const novaPresenca = new PresencasConfirmadas()
        const aluno = await this.repo.findOne({where: {id: alunoid}})

        if (aluno) {
            novaPresenca.aluno = aluno
            novaPresenca.dia = new Date(dayjs().format('YYYY-MM-DD'))
            novaPresenca.horario = horario

            const result = await this.presencaRepo.save(novaPresenca)

            return result
        }

    }

}
