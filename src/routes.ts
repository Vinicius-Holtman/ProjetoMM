import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { CreateTodoController } from './controller/CreateTodoController'

import { UpdateTodoService } from './services/UpdateTodoService'

import { ListCategoryController } from './controller/ListCategoryController'
import { ListTodoController } from './controller/ListTodoController'
import { ListCategoryService } from './services/ListCategoryService'

const router = Router()

const createCategoryController = new CreateCategoryController()
const createTodoController = new CreateTodoController()
const listCategoryController = new ListCategoryController()
const listTodoController = new ListTodoController()
const updateTodoService = new UpdateTodoService()

router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);

router.put("/todo/:isActived", updateTodoService.update);

router.get("/category", listCategoryController.handle);
router.get("/todo", listTodoController.handle);

router.get('/', async (req, res) => {
     
     const listCategoryService = new ListCategoryService();
     const category = await listCategoryService.execute();
     
     res.render('index', {category: category, nome: 'holtman !!'})
})

export { router }