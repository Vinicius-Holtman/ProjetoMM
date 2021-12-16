import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("todo")
export class Todo {
    @PrimaryColumn()
    id: string

    @Column()
    title: string
    
    @Column()
    description: string
    
    @Column()
    data_limit: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
