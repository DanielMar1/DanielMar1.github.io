const todoListElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#new-todo-input");
const addNewToDoBtn = document.querySelector("#add-todo-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

addNewToDoBtn.addEventListener("click", () => {
  const newTodoText = inputElement.value;

  if (newTodoText === "") return;
  inputElement.value = "";

  const newTodo = {
    id: Math.random().toString(36).substr(2, 9),
    text: newTodoText,
    isCompleted: false,
  };

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
});

function renderTodos() {
  todoListElement.innerHTML = "";
  todos.forEach((todo) => {
    const todoItemContainer = document.createElement("div");

    todoItemContainer.textContent = todo.text;
    const todoId = todo.id;

    todoItemContainer.addEventListener("click", (e) => {
      todos = todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    todoItemContainer.appendChild(completeBtn);

    todoListElement.appendChild(todoItemContainer);
  });
}
