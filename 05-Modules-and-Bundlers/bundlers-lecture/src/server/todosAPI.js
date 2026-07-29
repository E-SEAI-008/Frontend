export async function getAllTodos() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        return data.slice(0,10)
    } catch(err) {
        console.error(err)
    }
}

export async function postTodo() {

}

export async function getTodoById() {

}
// export {getAllTodos, postTodo, getTodoById}