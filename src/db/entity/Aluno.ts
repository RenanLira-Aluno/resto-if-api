import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";


@Entity()
export class Aluno {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    nome_usual!: string;

    @Column()
    cpf!: string;

    @Column()
    matricula!: string;


}