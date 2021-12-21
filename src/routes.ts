import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { CreateTodoController } from './controller/CreateTodoController'
import { ListCategoryController } from './controller/ListCategoryController'
import { ListTodoController } from './controller/ListTodoController'

const router = Router()

const createCategoryController = new CreateCategoryController()
const createTodoController = new CreateTodoController()
const listCategoryController = new ListCategoryController()
const listTodoController = new ListTodoController()

router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);

router.get("/category", listCategoryController.handle);
router.get("/todo", listTodoController.handle);

router.get('/', (req, res) => {
     res.render('index')
})

export { router }