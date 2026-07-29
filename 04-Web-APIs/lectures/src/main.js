const storeItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
  // const value = JSON.parse(localStorage.getItem(key));
  // if(Array.isArray(value)) {
  //   return value || []
  // }
  return JSON.parse(localStorage.getItem(key));
}

const form = document.querySelector('#add-todo');
const todoList = document.getElementById('todo-list');
let todos = getItem('todos') || [];

// todos.forEach((todo) => console.log(todo));

const addTodo = (item) => {
  const li = document.createElement('li');
  li.id = item.id;
  item.completed ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.title;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "done"
  doneBtn.addEventListener("click", () => {
    if(item.completed) {
      item.completed = false;
      li.style.textDecoration = 'none';
      todos = todos.map((todo) => {
        if(item.id === todo.id) {
          todo.completed = item.completed;
          return todo
        }
        return todo
      })
      storeItem("todos", todos)
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
      storeItem('todos', todos);
    }
  })

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => {
    li.remove()
    todos = todos.filter((todo) => todo.id !== item.id);
    storeItem("todos", todos)
  });

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  // todoList.appendChild(li)
  return li;
};

// then() and catch()
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => response.json())
// .then((data) => {
//   console.log(data.slice(0,10))
//   data.slice(0,10).forEach((todo) => {
//     const newTodoElement = addTodo(todo);
//     todoList.appendChild(newTodoElement)
//   })
// })
// .catch((error) => console.error(error))

// async/ await
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

console.log(getData('https://jsonplaceholder.typicode.com/todos'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('#add-todo input').value.trim();
  const newTodoItem = {
    id: `${new Date()}-${inputValue}`,
    title: inputValue,
    completed: false,
  };
  const newTodoElement = addTodo(newTodoItem);
  todoList.appendChild(newTodoElement);
  todos.push(newTodoItem);
  storeItem("todos", todos)
  form.reset();
});

document.addEventListener('DOMContentLoaded', async () => {
  // const todos = await getData('https://jsonplaceholder.typicode.com/todos');
  // console.log(todos);
  todos.forEach((todo) => {
    const newTodoElement = addTodo(todo);
    todoList.appendChild(newTodoElement);
  });

  const photos = await getData('https://jsonplaceholder.typicode.com/photos');
  console.log(photos.slice(0, 10));
});
