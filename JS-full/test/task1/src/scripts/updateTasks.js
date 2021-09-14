import { renderTasks } from './render.js';
import { getTasksList, baseUrl } from './tasksGateway.js';

// input event
// output undefined

export const updateTask = (event, taskId) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
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
    return fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(updatedTask),
    })
      .then(() => getTasksList())
      .then(tasks => renderTasks(tasks));
  });
};
