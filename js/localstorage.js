import init from "./initTask.js";
import { inputValue } from './addTodo.js'


function localstorage() {

  const emptyField = document.querySelector('#emptyList'),
    taskList = document.querySelector('#tasksList'),
    value = inputValue()

  if (localStorage.getItem('id') == value) {
    console.log(value)
    init(value)
  }




}

export default localstorage;