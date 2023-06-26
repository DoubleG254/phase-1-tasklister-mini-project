document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildingtools(e.target.newtaskdescription.value);
    form.reset()
  });
});

function buildingtools(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", deletetask);
  btn.textContent = "x";
  li.textContent = todo
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}
function deletetask(e) {
  e.target.parentNode.remove();
}
