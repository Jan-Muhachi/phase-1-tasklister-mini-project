document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form=document.querySelector( " #create-task-form " ) 
  const tasks=document.querySelector("#tasks")
  console.log(tasks)
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    const taskDescription=document.querySelector("#new-task-description")
    if (taskDescription.value==""){
      alert ("Please write") 
      console.log(taskDescription.value)
    }
    else{
      const taskList=document.createElement('li');
      const deleteButton=document.createElement("button")
      deleteButton.textContent= 'x'
      taskList.textContent=taskDescription.value
      taskList.appendChild(deleteButton)
      tasks.appendChild(taskList)
      deleteButton.addEventListener('click',()=>{
        taskList.remove()

      })
    }
    form.reset()
  }) 

