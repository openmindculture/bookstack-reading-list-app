const fetchRetry = (url, options = {}, retries) =>
  fetch(url, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      if (retries > 0) {
        return fetchRetry(url, options, retries - 1);
      }
      throw new Error(res.status);
    })
    .catch(error => console.error(`Throwing error in fetchRetry: error.message: ${error.message}`));

export default fetchRetry;
