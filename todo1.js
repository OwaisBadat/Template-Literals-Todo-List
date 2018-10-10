
let taskText = document.getElementById('taskText')
let addTask = document.getElementById('addTask')
let pendingTaskList = document.getElementById('pendingTaskList')
let completedTaskList = document.getElementById('completedTaskList')


let taskList = ''


function completed(checkbox){
  if(checkbox.parentElement == pendingTaskList){
  completedTaskList.appendChild(checkbox)
} else if (checkbox.parentElement == completedTaskList){
  pendingTaskList.appendChild(checkbox)
}
}

function removeTask(button){
  parentList = button.parentElement
  parentList.removeChild(button)
}


addTask.addEventListener('click',function(){

  let taskTitle = taskText.value


  let taskItem = `
    <li class = "taskItem">
      <input class="checkbox" type="checkbox" onchange='completed(this.parentElement)'>
      <label>${taskTitle}</label>
      <button class="button" onclick="removeTask(this.parentElement)">Delete</button>
    </li>
  `
pendingTaskList.insertAdjacentHTML('beforeend',taskItem)
})
