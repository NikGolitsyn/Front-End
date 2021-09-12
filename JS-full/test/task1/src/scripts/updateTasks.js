import { renderTasks } from './render.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';


export const listClickHandler = event => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox'); 
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn'); 

  if (!isCheckbox && !isDeleteButton) {
    return;
  }

  const taskId = event.target.closest('.list-item').firstElementChild.dataset.id;

  if (isDeleteButton) {
    deleteTask(taskId)
      .then(() => renderTasks());
    return;
  }

  getTasksList().then(tasksList => {
    const { text, createDate } = tasksList.find(task => task.id === taskId);
    const done = event.target.checked; 
    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null, 
    };
    updateTask(taskId, updatedTask)
      .then(() => renderTasks());
  });
};

