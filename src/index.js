document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let TaskForm = document.getElementById("create-task-form");
  TaskForm.addEventListener('submit',function todo(){
    let item = document.getElementById('new-task-description').value;
    var text= document.createElement('li').innerHTML=item;
    document.getElementById('tasks').appendChild(text);
  }
});
