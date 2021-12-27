import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { CreateTodoController } from './controller/CreateTodoController'
import { CreateUserController } from './controller/CreateUserController'
import { DeleteUserController } from './controller/DeleteUserController'
import { DeleteTodoController } from './controller/DeleteTodoController'
import { DeleteCategoryController } from './controller/DeleteCategoryController'
import { ListCategoryController } from './controller/ListCategoryController'
import { ListTodoController } from './controller/ListTodoController'
import { ListUserController } from './controller/ListUserController'
import { UpdateTodoService } from './services/UpdateTodoService'
import { UpdateUserService } from './services/UpdateUserService'

const router = Router()

// Create Entities
const createCategoryController = new CreateCategoryController()
const createTodoController = new CreateTodoController()
const createUserController = new CreateUserController()

// List Estities
const listCategoryController = new ListCategoryController()
const listTodoController = new ListTodoController()
const listUserController = new ListUserController()

// Delete Entities
const deleteUserController = new DeleteUserController()
const deleteTodoController = new DeleteTodoController()
const deleteCategoryController = new DeleteCategoryController()

// Update Entities
const updateTodoService = new UpdateTodoService()
const updateUserService = new UpdateUserService()

// Routes for create
router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);
router.post("/user", createUserController.handle);

// Routes for update
router.put("/todo/:id", updateTodoService.update);
router.put("/user/:user_id", updateUserService.update);

// Routes for delete
router.delete("/user/:user_id", deleteUserController.handle);
router.delete("/todo/:id", deleteTodoController.handle);
router.delete("/category/:id", deleteCategoryController.handle);

// Routes for list
router.get("/category", listCategoryController.handle);
router.get("/todo", listTodoController.handle);
router.get("/user", listUserController.handle);

// Teste para o front end
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