let inputElem = document.getElementById("inputField");
let clickBtn = document.querySelector(".btn");
let todoElem = document.querySelector(".todoListsElem");

  const addTodo = () => {
  if (inputElem.value.trim() === "") return;
  let divElem = document.createElement("div");
  divElem.classList.add("task");
  let pElem = document.createElement("p");
  pElem.textContent = inputElem.value;
  let delElem = document.createElement("img");
  delElem.setAttribute("src", "delete.svg");
  delElem.style.cursor = "pointer";
  divElem.appendChild(pElem);
  divElem.appendChild(delElem);
  todoElem.append(divElem);
  inputElem.value = "";
  delElem.addEventListener("click", () => {
  divElem.remove();
  });
};

clickBtn.addEventListener("click", addTodo);

inputElem.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});


