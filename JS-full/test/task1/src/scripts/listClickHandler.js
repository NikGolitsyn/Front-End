import { updateTask } from './updateTasks.js';
import { deleteTask } from './deleteTask.js';
import { getTasksList} from './tasksGateway.js';

// input event
// output undefined
export const listClickHandler = event => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox'); // применяем дилегирование к объекту 'list'
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn'); // применяем дилегирование к объекту 'list'

  if (!isCheckbox && !isDeleteButton) {
    return;
  }

  const taskId = event.target.closest('.list-item').firstElementChild.dataset.id;
  if (isDeleteButton) {
    deleteTask(taskId);
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
    updateTask(taskId, updatedTask);
  });
};

// 1 Prepare data
// 2 Update data in Data base
// 3 Read new data from server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
