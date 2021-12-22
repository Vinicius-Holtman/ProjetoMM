import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("todo")
export class Todo {
    @PrimaryColumn()
    id: string

    @Column()
    title: string
    
    @Column()
    description: string

    @Column()
    isActived: boolean
    
    @Column()
    data_limit: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
