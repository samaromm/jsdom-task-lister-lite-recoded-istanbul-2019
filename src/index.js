document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let TaskForm = document.getElementById("create-task-form");
  TaskForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    let item = document.getElementById('new-task-description').value;
    let del= document.createElement('span');
    del.textContent="\u00D7";
    var forLi= document.createElement('li');
    forLi.textContent=item;
    document.getElementById('tasks').appendChild(text);
  });
});
