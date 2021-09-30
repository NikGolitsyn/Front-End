export const fetchFunction = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositories = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to load data');
};