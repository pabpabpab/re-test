export default {
  getJson(context, url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  },
};
