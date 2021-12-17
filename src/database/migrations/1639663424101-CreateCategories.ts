import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1639663424101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "todo_sender",
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
                       name: "FKToDoCategories",
                       referencedTableName: "todo",
                       referencedColumnNames: ["id"],
                       columnNames: ["todo_sender"],
                       onDelete: "SET NULL",
                       onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }
}
