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
let todos = localStorage.getItem("todos") || [];

// todos.forEach((todo) => console.log(todo));
localStorage.setItem("username", "Alice")
storeItem("username", "Alice")
storeItem('age', 22);
storeItem('isStudent', true);
storeItem('hobbies', ['singing', 'running']);
storeItem('person', {
  name: 'Alice',
  age: 22,
  hobbies: ['singing', 'running'],
});

console.log(getItem("person"))

const addTodo = (item) => {
  const li = document.createElement('li');
  li.id = item.id;
  item.completed ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.title;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(span);
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
  form.reset();
});

document.addEventListener('DOMContentLoaded', async () => {
  // const todos = await getData('https://jsonplaceholder.typicode.com/todos');
  // console.log(todos);
  todos.slice(0, 10).forEach((todo) => {
    const newTodoElement = addTodo(todo);
    todoList.appendChild(newTodoElement);
  });

  const photos = await getData('https://jsonplaceholder.typicode.com/photos');
  console.log(photos.slice(0, 10));
});
