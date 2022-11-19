import anim from "./anim.js"
import addTodo from './addTodo.js'
import emptyTask from './emptyTask.js'
import deleteTasks from './delTasks.js'

window.addEventListener('DOMContentLoaded', () => {

  (function () {
    const h1 = document.querySelector('.h1'),
      h2 = document.querySelector('.h2');
    gsap.from('.container', { opacity: 0, y: -20, })
    gsap.from(h2, { opacity: 0, y: -20, delay: .1 })
  }())



  let taskState = []
  emptyTask(taskState)

  anim()
  addTodo(taskState)
  deleteTasks()


})
