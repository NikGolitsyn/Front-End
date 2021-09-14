// input string userId
// output object promise

async function fetchUser(userId) {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
}

fetchUser('facebook')
  .then(data => console.log(data))
  .catch(err => console.log(err));
