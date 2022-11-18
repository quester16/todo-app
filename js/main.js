import anim from "./anim.js"
import addTodo from './addTodo.js'
import init from './initTask.js'
import { inputValue } from "./addTodo.js"
// import localstorage from './localstorage.js'
import delTasks from './delTasks.js'

window.addEventListener('DOMContentLoaded', () => {

  (function () {
    const h1 = document.querySelector('.h1'),
      h2 = document.querySelector('.h2');
    gsap.from('.container', { opacity: 0, y: -20, })
    gsap.from(h2, { opacity: 0, y: -20, delay: .1 })
  }())



  const emptyField = document.querySelector('#emptyList'),
    taskList = document.querySelector('#tasksList');



  let taskState = []

  anim()
  addTodo(taskState)
  delTasks()



})
