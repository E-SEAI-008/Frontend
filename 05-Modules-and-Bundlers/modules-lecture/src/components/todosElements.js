import { storeTodos, getTodos } from "../storage/todosStorage.js";

export const addTodo = (item, todos) => {
  const li = document.createElement('li');
  li.id = item.id;
  item.completed ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.title;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'done';
  doneBtn.addEventListener('click', () => {
    if (item.completed) {
      item.completed = false;
      li.style.textDecoration = 'none';
      todos = todos.map((todo) => {
        if (item.id === todo.id) {
          todo.completed = item.completed;
          return todo;
        }
        return todo;
      });
      storeTodos(todos);
    } else {
      item.completed = true;
      li.style.textDecoration = 'line-through';
      todos = todos.map((todo) => {
        if (item.id === todo.id) {
          todo.completed = item.completed;
          return todo;
        }
        return todo;
      });
      storeTodos(todos);
    }
  });
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    todos = todos.filter((todo) => todo.id !== item.id);
    storeTodos(todos);
  });

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  return li;
};


export const displayTodos = (todos, todoList) => {
    todos.forEach((todo) => {
        const newTodo = addTodo(todo, todos);
        todoList.appendChild(newTodo)
    })
}