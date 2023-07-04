import { Admin, DataSource } from "typeorm";
import { Aluno } from "./entity/Aluno";
import { RefeicoesDoDia } from "./entity/RefeicoesDoDia";
import { Cardapio } from "./entity/Cardapio";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "168.75.103.246",
    port: 5432,
    username: "root",
    password: "root",
    database: "restoifdb",
    synchronize: true,
    logging: true,
    entities: [Admin, Aluno, RefeicoesDoDia, Cardapio],
    subscribers: [],
    migrations: [],
})
