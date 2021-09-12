import { renderTasks } from './render.js';
import { createTask } from './tasksGateway.js';

// input none
// output undefined

export const createTaskHandler = () => {
  const inputElem = document.querySelector('.task-input'); 
  const text = inputElem.value; 
  if (!text) {
    return;
  }
  inputElem.value = ''; 

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => renderTasks());
};

// 1. Prepare data
// 2. Write data to DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
