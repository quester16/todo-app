import anim from "./anim.js";

function emtytask(taskState) {
  const taskList = document.querySelector('#tasksList');

  if (!taskState.length) {
    const emptyField = `
    <li id="emptyList" class="list-group-item empty-list">
      <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
      <div class="empty-list__title">Список дел пуст</div>
    </li>`;

    taskList.insertAdjacentHTML('afterbegin', emptyField)
    anim('#tasksList')
  } else {
    const emptyElem = document.querySelector('#emptyList');
    emptyElem ? emptyElem.remove() : null
  }


}
export default emtytask;