export const baseUrl = `https://613e4b5094dbd600172abb49.mockapi.io/api/v1/tasks`;

export const getTasksList = () => fetch(baseUrl).then(tasks => tasks.json());

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
