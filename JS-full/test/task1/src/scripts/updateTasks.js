import { renderTasks } from './render.js';
import { getTasksList, baseUrl } from './tasksGateway.js';

// input event
// output undefined

export const updateTask = (taskId, updatedTaskDate) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskDate),
  })
    .then(() => getTasksList())
    .then(tasks => renderTasks(tasks));

// 1 Prepare data
// 2 Update data in Data base
// 3 Read new data from server
// 4 Save new data to front-end storage
// 5 Update UI based on new data
