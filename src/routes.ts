import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { CreateTodoController } from './controller/CreateTodoController'

const router = Router()

const createCategoryController = new CreateCategoryController()
const createTodoController = new CreateTodoController()

router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);

router.get("/todo", createTodoController.handle);
router.get("/todo", createTodoController.handle);

export { router }