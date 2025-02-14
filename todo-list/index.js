const initialItems = ["JavaScript", "HTML"];
const listContainer = document.getElementById("listContainer");
const todoItemInput = document.getElementById("todoItemInput");
const todoForm = document.getElementById("inputForm");
const todo = document.getElementById("todo");
const noElementMsg = document.querySelector(".no-elments");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoItem = todoItemInput.value;
  if (todoItem) {
    addTodoItem(todoItem);
  }
});

function addTodoItem(todoItem) {
  const todoElement = todo.content.cloneNode(true);
  todoElement.querySelector(".text").textContent = todoItem;
  listContainer.appendChild(todoElement);
  todoItemInput.value = "";

  updateEmptyMessage();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("edit")) {
    const edit = e.target;
    const text = e.target.parentElement.querySelector(".text");
    const input = document.createElement("input");
    input.value = text.textContent;
    edit.parentElement.replaceChild(input, text);
    edit.textContent = "💾";
    edit.className = "save";
  } else if (e.target.classList.contains("save")) {
    const save = e.target;
    const text = e.target.parentElement.querySelector("input");
    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text.value;
    save.parentElement.replaceChild(span, text);
    save.textContent = "✏️";
    save.className = "edit";
  }

  updateEmptyMessage();
});

function updateEmptyMessage() {
  if (listContainer.children.length === 0) {
    noElementMsg.style.display = "block";
  } else {
    noElementMsg.style.display = "none";
  }
}

initialItems.forEach(addTodoItem);
updateEmptyMessage();
