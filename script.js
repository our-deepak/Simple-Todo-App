let inputElem = document.getElementById("inputField");
let clickBtn = document.querySelector(".btn");
let todoElem = document.querySelector(".todoListsElem");

let todos = [];

// Render todos from array to DOM
const renderTodos = () => {
    todoElem.innerHTML = ""; // Clear current DOM
    todos.forEach((todo, index) => {
        let divElem = document.createElement("div");
        divElem.classList.add("task");

        let pElem = document.createElement("p");
        pElem.textContent = todo;

        let delElem = document.createElement("img");
        delElem.setAttribute("src", "delete.svg");
        delElem.style.cursor = "pointer";

        delElem.addEventListener("click", () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        divElem.appendChild(pElem);
        divElem.appendChild(delElem);
        todoElem.appendChild(divElem);
    });
};

// Save todos array to localStorage
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Load todos array from localStorage
const loadTodos = () => {
    const stored = localStorage.getItem("todos");
    if (stored) {
        todos = JSON.parse(stored);
    }
};

const addTodo = () => {
    let task = inputElem.value.trim();
    if (task === "") return;
    todos.push(task);
    saveTodos();
    renderTodos();
    inputElem.value = "";
};

clickBtn.addEventListener("click", addTodo);

inputElem.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Initialize app
loadTodos();
renderTodos();