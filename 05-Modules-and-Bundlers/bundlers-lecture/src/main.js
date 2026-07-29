import './index.css'

import { getAllTodos } from './server/todosAPI.js';
import getAllPokemon from './server/pokeAPI.js';
import { addTodo, displayTodos } from './components/todosElements.js';
import { getTodos } from './storage/todosStorage.js';

const todoList = document.getElementById('todo-list');
const addTodoForm = document.getElementById('add-todo');
let todos = getTodos();
let pokemon = [];

document.addEventListener('DOMContentLoaded', async () => {
  todos = await getAllTodos();
  console.log(todos);
  pokemon = await getAllPokemon();
  console.log(pokemon);

  displayTodos(todos, todoList);
});


