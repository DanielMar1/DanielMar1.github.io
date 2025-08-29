const todoListElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#new-todo-input");
const addNewToDoBtn = document.querySelector("#add-todo-btn");

const todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

function addNewTodo() {
  const newTodoText = inputElement.value;

  if (newTodoText === "") return;
  inputElement.value = "";

  const newTodo = {
    id: Math.random().toString(36).substr(2, 9),
    text: newTodoText,
    isCompleted: false,
  };

  todos.push(newTodo);
  updateTodos();
}

addNewToDoBtn.addEventListener("click", addNewTodo);

function updateTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function renderTodos() {
  todoListElement.innerHTML = "";

  const renderTodo = (todo) => {
    // Storing current Todo's id
    const todoId = todo.id;

    // Declaring Remove Todo Function
    const removeTodo = () => {
      const idx = todos.findIndex((t) => t.id === todoId);
      if (idx !== -1) {
        todos.splice(idx, 1);
        updateTodos();
      }
    };

    // Declaring Complete Todo Function
    const completeTodo = () => {
      const t = todos.find((t) => t.id === todoId);
      if (t) {
        t.isCompleted = !t.isCompleted;
        updateTodos();
      }
    };

    // Creating todo item container
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item");

    // Create a checkbox for marking complete
    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.id = todoId;
    completeCheckbox.classList.add("complete-checkbox");
    completeCheckbox.checked = !!todo.isCompleted;
    completeCheckbox.addEventListener("change", function (e) {
      e.stopPropagation();
      completeTodo();
    });
    todoItemContainer.appendChild(completeCheckbox);

    // Creating Todo's text element
    const textElement = document.createElement("p");
    textElement.classList.add("text");
    textElement.textContent = todo.text;
    todoItemContainer.appendChild(textElement);

    if (todo.isCompleted) {
      todoItemContainer.classList.add("completed");
    }

    // Adding Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      removeTodo();
    });
    todoItemContainer.appendChild(removeBtn);

    // Adding Todo item to the list
    todoListElement.appendChild(todoItemContainer);
  };

  todos.forEach((todo) => {
    renderTodo(todo);
  });
}
