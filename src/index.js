document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById("create-task-form");
  function todo(){
    let item = document.getElementById('new-task-description').value;
    var text= document.createElement('li').innerHTML=item;
    document.getElementById('tasks').appendChild(text);
  }
});
