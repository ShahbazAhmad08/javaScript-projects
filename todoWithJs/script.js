function addTask(){
  const task= document.getElementById("input-task");
  const taskValue=task.value.trim();

  if(taskValue){
  const newTask=document.createElement("li");
  newTask.textContent=taskValue;
  
  const taskList=document.getElementById("taskList");
  taskList.append(newTask);

  task.value="";
  deleteTask(newTask)
  }
}
function deleteTask(taskItem){
  const deletebtn=document.createElement("button");
  deletebtn.textContent="Delete";

 deletebtn.addEventListener("click",function(){
    taskItem.remove()
 });
 taskItem.append(deletebtn);
}