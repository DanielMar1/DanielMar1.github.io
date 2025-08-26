const todoListElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#new-todo-input");
const addNewToDoBtn = document.querySelector("#add-todo-btn");

const todos = JSON.parse(localStorage.getItem("data")) || [];

const renderTodos = () => {
  todoListElement.innerHTML = "";
  todos.forEach((todo) => {
    const todoItemContainer = document.createElement("div");

    todoItemContainer.textContent = todo;

    todoListElement.appendChild(todoItemContainer);
  });
};

renderTodos();

addNewToDoBtn.addEventListener("click", () => {
  const newTodoText = inputElement.value;

  if (newTodoText === "") return;
  inputElement.value = "";

  todos.push(newTodoText);
  localStorage.setItem("data", JSON.stringify(todos));
  renderTodos();
});
