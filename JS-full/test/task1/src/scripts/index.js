import { initTodoListHandler } from './todoList.js';
import { renderTasks } from './render.js';
// import { getTasksList } from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandler();
});

// 1. Get data from server
// 2. Save data to front-end storage
