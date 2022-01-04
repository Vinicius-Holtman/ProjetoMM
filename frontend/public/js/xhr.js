let xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if(xhr.status == 4) {
        console.log(xhr)
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1")

xhr.send()