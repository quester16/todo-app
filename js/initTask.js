import anim from "./anim.js"
import { inputValue } from "./addTodo.js"
import emtytask from "./emptyTask.js";


const init = (taskState) => {
  const task = document.createElement('div'),
    taskList = document.querySelector('#tasksList');


  let titleVal = inputValue()
  const listState = {
    id: Date.now(),
    title: titleVal,
    status: false,
    dataId: Date.now()
  };


  taskState.push(listState)

  const classStatus = taskState.status ? 'task-title task-title--done' : 'task-title'

  task.innerHTML = `
  <li id="${listState.id}" data-id="${listState.dataId}" class="list-group-item d-flex justify-content-between task-item">
    <span class="${classStatus}">${listState.title}</span>
    <div class="task-item__buttons">
      <button type="button" data-action="done" class="btn-action">
        <img src="./img/tick.svg" alt="Done" width="18" height="18">
      </button>
      <button type="button" data-action="delete" class="btn-action">
        <img src="./img/cross.svg" alt="Done" width="18" height="18">
      </button>
    </div>
  </li>
  `
  task.classList.add('task')

  taskList.appendChild(task)
  anim(`[data-id="${listState.id}"]`)




  //<-- task buttons -->//
  const doneBtn = document.querySelectorAll('[data-action="done"]')
  const delBtn = document.querySelectorAll('[data-action="delete"]')


  doneBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('done')
      const taskItem2 = btn.closest('.task-item'),
        id2 = taskItem2.id;

      const task = btn.closest('.list-group-item')
      task.children[0].classList.add('task-title--done')

      const todoId = taskState.find(item => item.id == id2)

      todoId.status = !todoId.status
    })
  })

  delBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('del')

      const taskItem3 = e.target.closest('.task-item'),
        id3 = taskItem3.id;

      const fId = taskState.findIndex(item => item.id == id3)
      console.log(fId)

      fId != -1 ? taskState.splice(fId, 1) && emtytask(taskState) : null
      // addTodo(taskState)

      taskItem3.parentNode.remove();
      gsap.fromTo('.task', { y: 0 }, { y: -10 })

      if (!taskList.children.length) {
        localStorage.clear()
      }
    })
  })

  return taskState
}

export default init;