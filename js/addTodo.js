import anim from "./anim.js";
import init from "./initTask.js";
import emtytask from "./emptyTask.js";

function addTodo(taskState) {
  const btn = document.querySelector('.btn-primary'),
    input = document.querySelector('form input'),
    taskList = document.querySelector('#tasksList');


  btn.addEventListener('click', e => {
    let value = inputValue()


    if (value) {
      e.preventDefault()

      let titleVal = inputValue()
      const listState = {
        id: Date.now(),
        title: titleVal,
        status: false,
        dataId: Date.now()
      };


      taskState.push(listState)
      console.log(listState, taskState)

      init(taskState, listState)
      emtytask(taskState)
    } else {

    }


    input.value = ''


  })
}

function inputValue() {
  const title = document.querySelector('form input');

  return title.value
}

export default addTodo;
export { inputValue };