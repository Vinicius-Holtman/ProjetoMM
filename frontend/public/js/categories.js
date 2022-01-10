async function getCategories() {
    try {
        const responseCategory = await api.get("/categories")
        //console.log(responseCategory)
    } catch (error) {
        console.error(`Ocorreu um erro: ${error}`)
    }
}