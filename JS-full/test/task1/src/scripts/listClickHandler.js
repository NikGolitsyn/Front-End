import { updateTask } from './updateTasks.js';
import { deleteTask } from './deleteTask.js';


// input event
// output undefined
export const listClickHandler = event => {
  const taskId = event.target.closest('.list-item').firstElementChild.dataset.id;

  deleteTask(event, taskId);
  updateTask(event, taskId);
};

// 1 Prepare data
// 2 Update data in Data base
// 3 Read new data from server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
