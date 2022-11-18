import anim from "./anim.js";
import init from "./initTask.js";

function addTodo(taskState) {
  const btn = document.querySelector('.btn-primary'),
    input = document.querySelector('form input'),
    emptyField = document.querySelector('#emptyList');


  btn.addEventListener('click', e => {
    let value = inputValue()


    if (value) {
      emptyField.remove()
      e.preventDefault()
      init(taskState)
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