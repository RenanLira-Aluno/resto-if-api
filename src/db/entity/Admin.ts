import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";


@Entity()
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;


}