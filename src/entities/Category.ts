import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import { Todo } from "./Todo";

@Entity("categories")
export class Category {
    
    @PrimaryColumn()
    readonly id: string

    @Column()
    category: string
    
    @Column()
    todo_sender: string

    @JoinColumn({name: "todo_sender"})
    @OneToMany(() => Todo, todo => todo.id)
    todo: Todo
    
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
