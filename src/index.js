document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let input = document.querySelector("#new-task-description")
let button = document.querySelector("#submit-button")
let list = document.querySelector("#tasks")
let form 

// button.addEventListener("click", function(){

// });

function renderTask(taskObj){
  let taskLi = document.createElement("li")
  taskLi.innetHTML = `
  ${taskLi}
  `
}

function showInput() {
  let taskDescription = document.getElementById("task-description")
  document.getElementById('tasks').innerHTML = `<li>${taskDescription.value}</li>`;
}

function logSubmit(event) {}