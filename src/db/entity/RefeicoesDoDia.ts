import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Cardapio } from "./Cardapio";


@Entity()
export class RefeicoesDoDia {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Cardapio, (cardapio) => cardapio.refeicoesAlmoco, {nullable: true})
    almoco?: Cardapio;

    @ManyToOne(() => Cardapio, (cardapio) => cardapio.refeicoesJanta, {nullable: true})
    jantar?: Cardapio;

    @Column({type: 'timestamptz'})
    dia!: Date;


}