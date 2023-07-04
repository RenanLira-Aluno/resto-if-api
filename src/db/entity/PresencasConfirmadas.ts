import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Aluno } from "./Aluno";


@Entity()
export class PresencasConfirmadas {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @ManyToOne(() => Aluno, (aluno) => aluno.id)
    aluno!: Aluno;

    @Column()
    horario!: string


    @Column({type: 'timestamptz'})
    dia!: Date;


}
