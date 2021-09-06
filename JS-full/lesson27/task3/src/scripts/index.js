import { initTodoListHandler } from './todoList.js';
import { renderTasks } from './render.js';

// algo 

// 1 create functions that will set and get items from local storage
// 2 create an event for input field and for create-btn to add new task to localStorage.tasksList
// 3 cerate an event that will toggle done status in localStorage.tasksList
// 4 create functions that will add new elements in DOM using our localStorage array
// 5 create an event for window that will synchronize all storage changes if event.key === 'tasksList'

document.addEventListener('DOMContentLoaded', () => {
  // после загрузки DOM, отрисовываем элементы и добавляем функции кнопке и инпуту
  renderTasks();
  initTodoListHandler();
});

const onStorageChange = event => {
  console.log(event);
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange); // при изменении Storage делаем функцию для всех владок
