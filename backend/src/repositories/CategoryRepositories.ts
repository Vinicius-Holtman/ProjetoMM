import { Repository, EntityRepository } from "typeorm";
import { Category } from "../entities/Category";

@EntityRepository(Category)
export class CategoryRepositories extends Repository<Category> {}