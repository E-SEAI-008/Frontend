export const storeTodos = (value) => {
  localStorage.setItem("todos", JSON.stringify(value));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

// export default getTodos;