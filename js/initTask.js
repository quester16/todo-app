import anim from "./anim.js"
import { inputValue } from "./addTodo.js"
import deleteTasks from "./delTasks.js";

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
  const todoActions = document.querySelectorAll('[data-action]')

  todoActions.forEach(btn => {
    if (btn.getAttribute('data-action') == 'done') {

      btn.addEventListener('click', e => {
        if (e.target == btn) {

          const task = e.target.closest('.list-group-item')
          task.children[0].classList.add('task-title--done')
        }
      })
    } else {
      btn.addEventListener('click', e => {

        if (e.target == btn) {

          const taskItem = e.target.closest('.task-item'),
            id = taskItem.id;

          taskState = taskState.filter(item => item.id != id)

          taskItem.parentNode.remove();
          console.log(taskState, id)

        }
      })
    }
  })

}

export default init;