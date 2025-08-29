const todoListElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#new-todo-input");
const addNewToDoBtn = document.querySelector("#add-todo-btn");

const todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

addNewToDoBtn.addEventListener("click", () => {
  const newTodoText = inputElement.value;

  if (newTodoText === "") return;
  inputElement.value = "";

  todos.push(newTodoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
});

function renderTodos() {
  todoListElement.innerHTML = "";
  todos.forEach((todo) => {
    const todoItemContainer = document.createElement("div");

    todoItemContainer.textContent = todo;

    todoItemContainer.addEventListener("click", () => {
      alert("you want to delete");
    });

    todoListElement.appendChild(todoItemContainer);
  });
}
