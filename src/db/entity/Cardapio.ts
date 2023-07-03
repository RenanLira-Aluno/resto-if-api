import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { RefeicoesDoDia } from "./RefeicoesDoDia";


@Entity()
export class Cardapio {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    descricao!: string;

    @OneToMany(() => RefeicoesDoDia, (re) => re.almoco, {nullable: true})
    refeicoesAlmoco?: string;

    @OneToMany(() => RefeicoesDoDia, (re) => re.jantar, {nullable: true})
    refeicoesJanta?: string;

}