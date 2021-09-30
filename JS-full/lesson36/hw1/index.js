// input array of usersId
// ouput object promise with array of users email in result

async function getUsersBlogs(usersId) {
  const fetchFunction = userId =>
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => userData.blog)

  const newArr = usersId.map(userId => {
    const blog = fetchFunction(userId);
    return blog;
  });
  const result = await Promise.all(newArr);
  return result;
}

// getUsersBlogs(['google', 'facebook', 'github']).then(data => console.log(data));
// fetchFunction('facebook').then(data => console.log(data));

