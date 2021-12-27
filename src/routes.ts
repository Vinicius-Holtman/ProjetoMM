import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { CreateTodoController } from './controller/CreateTodoController'
import { CreateUserController } from './controller/CreateUserController'

// import { UpdateTodoService } from './services/UpdateTodoService'

import { ListCategoryController } from './controller/ListCategoryController'
import { ListTodoController } from './controller/ListTodoController'
import { ListUserController } from './controller/ListUserController'

const router = Router()

const createCategoryController = new CreateCategoryController()
const createTodoController = new CreateTodoController()
const createUserController = new CreateUserController()

const listCategoryController = new ListCategoryController()
const listTodoController = new ListTodoController()
const listUserController = new ListUserController()

// const updateTodoService = new UpdateTodoService()

router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);
router.post("/user", createUserController.handle);

// router.put("/todo/:isActived", updateTodoService.update);

router.get("/category", listCategoryController.handle);
router.get("/todo", listTodoController.handle);
router.get("/user", listUserController.handle);


import { ListCategoryService } from './services/ListCategoryService'
import { ListUserService } from './services/ListUserService'

router.get('/', async (req, res) => {
     
     const listCategoryService = new ListCategoryService();
     const category = await listCategoryService.execute();

     const userRepositories = new ListUserService()
     const user = await userRepositories.execute()

     var data = new Date();
     var dia = String(data.getDate()).padStart(2, '0');
     var mes = String(data.getMonth() + 1).padStart(2, '0');
     var ano = data.getFullYear();
     const dataAtual = `${dia} - ${mes} - ${ano}`

     res.render('index', {category, user, dataAtual })
})

export { router }