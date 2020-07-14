document.addEventListener("DOMContentLoaded", () => {
let input = document.querySelector("#new-task-description")
let button = document.querySelector("#submit-button")
let list = document.querySelector("#tasks")
let newForm = document.querySelector("#create-task-form")

 newForm.addEventListener("submit", function(e){
   e.preventDefault()
   console.log(e.target)
   let inputLi = document.createElement("li")
  let input = document.querySelector("#new-task-description").value 
  inputLi.innerHTML = input
  list.append(inputLi)
  
 });

});





