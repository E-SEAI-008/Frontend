const form = document.querySelector('#add-todo');
const todoList = document.getElementById('todo-list');

// console.log(form)
// console.log(form[0])
// console.log(todoList)
const todos = [
  {
    id: `${new Date()}-cooking`,
    text: 'Cooking',
    complete: false,
  },
  {
    id: `${new Date()}-singing`,
    text: 'Singing',
    complete: false,
  }
];

const addTodo = (item) => {
  const li = document.createElement('li');
  li.id = item.id;
  item.complete ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  // todoList.appendChild(li)
  return li;
};

todos.forEach((todo) => {
    const newTodoElement = addTodo(todo);
    todoList.appendChild(newTodoElement)
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector("#add-todo input").value.trim()
  const newTodoItem = {
    id: new Date(),
    text: inputValue,
    complete: false
  }
  const newTodoElement = addTodo(newTodoItem);
  todoList.appendChild(newTodoElement);
  form.reset()
});
