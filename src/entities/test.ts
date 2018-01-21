import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("test")
export class TestEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length:100
    })
    name: string;
}