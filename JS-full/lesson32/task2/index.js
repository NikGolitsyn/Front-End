// input string
// output object Promise

// algo
// 1. crate an array of urls
// 2. create function Random timeout delay
// 3. create function request // input string(url), otput // promise that contains user info and url
// 4. in request function use randomTimeoutDelay in setTimeout func as second param.
// 5. map servers array to add userId at the end of url
// 6. map our new array and use reques function for every element / this way we created an array of promises.
// 7. use Promise.race method for our array of promises

export const getUserASAP = userId => {
  const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

  const userUrls = servers.map(serverUrl => `${serverUrl}/${userId}`);

  const randomTimeoutDelay = (from, to) => from + Math.random() * (to - from);

  const request = url =>
    new Promise((resolve, reject) => {
      const randomDelay = randomTimeoutDelay(1000, 3000);
      setTimeout(() => {
        resolve({
          userData: {
            name: 'Tom',
            age: 17,
          },
          source: url,
        });
      }, randomDelay);
    });

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user1').then(data => console.log(data));
