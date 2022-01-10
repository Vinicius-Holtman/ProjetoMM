import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateToDo1639658268279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "todo",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "data_limit",
                        type: "date"
                    },
                    {
                        name: "isActived",
                        type: "boolean",
                    },
                    {
                        name: "category_sender",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    { 
                       name: "FKCategoryTodo",
                       referencedTableName: "categories",
                       referencedColumnNames: ["id"],
                       columnNames: ["category_sender"],
                       onDelete: "CASCADE",
                       onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("todo")
    }
}
