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
import { UpdateTodoController } from './controller/UpdateTodoController'
import { UpdateUserController } from './controller/UpdateUserController'
import { UpdateCategoryController } from './controller/UpdateCategoryController'
import { LoginUserController } from './controller/LoginUserController'

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
const updateTodoController = new UpdateTodoController()
const updateUserController = new UpdateUserController()
const updateCategoryController = new UpdateCategoryController()

// Render view
const loginUserController = new LoginUserController()

// Routes for create
router.post("/category", createCategoryController.handle);
router.post("/todo", createTodoController.handle);
router.post("/user", createUserController.handle);

// Routes for update
router.put("/todos/:id", updateTodoController.handle);
router.put("/categories/:id", updateCategoryController.handle);
router.put("/users/:user_id", updateUserController.handle);

// Routes for delete
router.delete("/user/:user_id", deleteUserController.handle);
router.delete("/todo/:id", deleteTodoController.handle);
router.delete("/category/:id", deleteCategoryController.handle);

// Routes for list
router.get("/categories", listCategoryController.handle);
router.get("/todos", listTodoController.handle);
router.get("/users", listUserController.handle);
router.get("/user/authenticated", loginUserController.handle)

export { router }