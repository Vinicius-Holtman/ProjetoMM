import { Router } from 'express'
const router = Router()

router.get('/', async (req, res) => {
    // const listCategoryService = new ListCategoryService();
    // const category = await listCategoryService.execute();

    // const userService = new ListUserService()
    // const user = await userService.execute()

    // const todoService = new ListTodoService()
    // const todo = await todoService.execute()

    // var data = new Date();
    // var dia = String(data.getDate()).padStart(2, '0');
    // var mes = String(data.getMonth() + 1).padStart(2, '0');
    // var ano = data.getFullYear();
    // const dateAtual = `${dia} - ${mes} - ${ano}`

    // res.render('index', { category, user, dateAtual, todo })

    res.send("funcionando")
})

router.get('/login', (req, res) => {
    res.render('login')
})

export { router }