document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let TaskForm = document.getElementById("create-task-form");
  TaskForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    let item = document.getElementById('new-task-description').value;
    let del= document.createElement('span');
    del.textContent="\u00D7";
    del class=close();
    var forLi= document.createElement('li');
    forLi.textContent=item+'      ';
    forLi.appendChild(del);
    document.getElementById('tasks').appendChild(forLi);
  });
});
