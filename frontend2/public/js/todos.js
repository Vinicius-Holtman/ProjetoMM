
const api = axios.create({
    baseURL: 'http://localhost:4040'
})

async function getTodo() {
    api.get('/todos')
        .then(function (response) {

            $('#todoListItems').empty();

            response.data.forEach(element => {

                let html = `
                <p class="input-checkbox">
                    <label class="col s11">
                        <input id="${element.id}" ${element.isActived === true ? 'checked' : null} type="checkbox" class="filled-in" />
                        <span data-id="${element.id}" class="checkboxCheked white-text">${element.title}</span>
                    </label>
                    <button data-id="${element.id}" type="button"><i class="material-icons grey-text col s1">delete_forever</i></button>
                </p>
                `;

                $('#todoListItems').append(html);

            });

        }).catch(function (error) {
            // handle error
            console.log(error);
        })
}

async function getCategories() {
    try {
        const responseCategory = await api.get("/categories")
        //console.log(responseCategory)
    } catch (error) {
        console.error(`Ocorreu um erro: ${error}`)
    }
}

function onCheckTodo(id) {
    api.put('/todos/' + id, { "isActived": true })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

function onUncheckTodo(id) {
    api.put('/todos/' + id, { "isActived": false })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

jQuery(function($){

    $('body').on('click', '.input-checkbox input[type=checkbox]', function(ev) {
        const id = this.id;
        const isCheked = this.checked;

        if (isCheked) {
            onCheckTodo(id);
        } else {
            onUncheckTodo(id);
        }
    });

    // botao excluir todo
    $('body').on('click', '.input-checkbox button', function(ev) {

        //1 -  mostrar uma janela de confirmacao antes de confirmar a conclusao
        //2 - ao terminar de excluir o todo da api voce deve remvoer o elemento todo da tela

        const id = $(this).data('id');
        api.delete('/todo/' + id)
        .then((response) => {
            console.log(response);

            // aqui termina de excluir o registro na api de todo
            // aqui voce pode executar outros javascript pra manipular elementos do html

        })
        .catch((error) => {
            console.log(error);
        });
    });
    

});
