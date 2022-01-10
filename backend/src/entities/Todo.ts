import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid} from "uuid";
import { Category } from "./Category";

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
    category_sender: string

    @JoinColumn({name: "category_sender"})
    @ManyToOne(() => Category)
    category: Category
    
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
