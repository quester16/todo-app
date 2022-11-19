import state from "./changeState.js";
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



      init(taskState)
      console.log(state(taskState))


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