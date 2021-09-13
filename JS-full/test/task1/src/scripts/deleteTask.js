import { getTasksList, baseUrl } from './tasksGateway.js';
import { renderTasks } from './render.js';

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })
    .then(() => getTasksList())
    .then(tasks => renderTasks(tasks));
