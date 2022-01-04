import express from 'express';
import { router }  from './routes'
import path from 'path';

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(router)

// import { ListCategoryService } from './services/ListCategoryService';
// import { ListUserService } from './services/ListUserService';
// import { ListTodoService } from './services/ListTodoService';

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
    res.send("esta funcionando")
})

router.get('/login', (req, res) => {
    res.render('login')
})

app.listen(3030, () => console.log('Server is runnning, port: 3030'))