const fetchRetry = (url, options = {}, retries) =>
  fetch(url, options)
    .then(res => {
      console.log('fetched, then res:', res);
      if (res.ok) {
        console.log('fetchRetry: res.ok, will return res.json(). res:', res)
        return res.json();
      }
      if (retries > 0) {
        console.log('retrying fetch, retries:', retries)
        return fetchRetry(url, options, retries - 1);
      }
      throw new Error(res.status);
    })
    .catch(error => console.error(`Throwing error in fetchRetry: error.message: ${error.message}`));

export default fetchRetry;
