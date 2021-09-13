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

