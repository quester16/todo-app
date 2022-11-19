import anim from "./anim.js";
import emtytask from "./emptyTask.js";

function deleteTasks(taskState) {
  const delBtn = document.querySelector('#removeDoneTasks'),
    taskList = document.querySelector('#tasksList');


  delBtn.addEventListener('click', (e) => {
    e.preventDefault()
    taskState = []
    taskList.innerHTML = ''
    // anim('#tasksList')
    emtytask(taskState)

  })


}

export default deleteTasks;